const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const dotenv=require("dotenv");
dotenv.config()

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}); 
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define User Schema and Model
const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email:email,password:password});
    if (!user) {
      return res.status(401).json({ errors: 'Invalid credentials' });
    }
  
    // Assuming your user object contains a username field
    const { username } = user;
    console.log(username)
    const token = jwt.sign({ email: user.email, username: user.username }, 'secret', { expiresIn: '1h' });
    res.json({ success: true, token, username }); // Return username along with other data
  });
  
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (await User.findOne({ email })) {
      return res.status(400).json({ errors: 'Email already exists' });
    }
    const newUser = new User({ username, email, password });
    await newUser.save();
    const token = jwt.sign({ email: newUser.email }, 'secret', { expiresIn: '1h' });
    res.json({ success: true, token });
  } catch (err) {
    res.status(500).json({ errors: 'Internal server error' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
