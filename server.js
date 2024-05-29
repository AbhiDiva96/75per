const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const session = require("express-session");

app.use(express.json());
app.use(cors());
app.use(session({ secret: "secret_ecom", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Database connection with MongoDB
mongoose.connect(
    "ADD_MONGO_URL"
).then(() => console.log("DATABASE CONNECTED"));

// User Schema
const Users = mongoose.model("Users", {
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  cartData: Object,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Passport configuration
passport.use(new GoogleStrategy({
    clientID: "ADD_YOUR_CLIENT_ID",
    clientSecret: "ADD_CLIENT_SECRET_CODE",
    callbackURL: "http://localhost:4000/auth/google/callback"
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await Users.findOne({ email: profile.emails[0].value });
      if (!user) {
        user = new Users({
          name: profile.displayName,
          email: profile.emails[0].value,
          password: "", // No password for Google-authenticated users
        });
        await user.save();
      }
      done(null, user);
    } catch (err) {
      done(err, false);
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await Users.findById(id);
    done(null, user);
  } catch (err) {
    done(err, false);
  }
});

// API Endpoints
app.get("/", (req, res) => {
  res.send("Express App is Running");
});

// Sign Up Endpoint
app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({
      success: false,
      errors: "User already exist with this email id",
    });
  }

  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  await user.save();
  const data = { user: { id: user.id } };
  const token = jwt.sign(data, "secret_ecom");
  res.json({ success: true, token });
});

// Login Endpoint
app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = { user: { id: user.id } };
      const token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, error: "Wrong Password" });
    }
  } else {
    res.json({ success: false, error: "Wrong Email Id" });
  }
});

// Google Authentication Endpoints
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

app.get("/auth/google/callback", 
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("http://localhost:3000/");
  }
);

app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on Port:" + port);
  } else {
    console.log("Error" + error);
  }
});
