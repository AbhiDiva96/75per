# Learn.md ✍
# 75per 📚
At 75% .com, our mission is to make quality education accessible to everyone. We understand the challenges students face in navigating their academic journey, and we're here to support you every step of the way with clear, concise, and reliable study materials. 

# Table of Contents 
1. [Introduction](#introduction-)
2. [Tech Stack](#tech-stack-)
3. [Contributing](#contributing-)
   - [Development Workflow](#development-workflow)
   - [Issue Report Process](#issue-report-process)
   - [Pull Request Process](#pull-request-process-)
4. [Usage](#usage)
5. [Resources for Beginners](#resources-for-beginners-)
   - [Basics of Git and GitHub](#basics-of-git-and-github-)
6. [Documentation](#documentation-)
7. [Code Reviews](#code-reviews-)
8. [Feature Requests](#feature-requests-)
9. [Spreading the Word](#spreading-the-word-)

## Introduction 🖥️
75per allows users to calculate their carbon footprint based on various parameters. It provides detailed insights and suggestions on how to reduce their carbon emissions. The name "75per" is derived from "Prithvi" (Earth) and "We," emphasizing collective action and collaboration. 
Visit the live application [here](https://75per.onrender.com).

## Tech Stack 🗃️

<a name="tech-stack"></a>

### Frontend
<a F="frontend"></a>
<p>
  <a href="https://www.w3schools.com/html/"> <img src="https://img.icons8.com/color/70/000000/html-5--v1.png" alt="HTML" /></a>
  <a href="https://www.w3schools.com/css/"> <img src="https://img.icons8.com/color/70/000000/css3.png" alt="CSS" /></a>
  <a href="https://www.w3schools.com/js/"><img src="https://img.icons8.com/color/70/000000/javascript--v1.png" alt="JS" /></a>
  <a href="https://www.w3schools.com/REACT/DEFAULT.ASP"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="React.js" width="50" height="50" /></a>
  </p>
  
- **HTML**:HTML (HyperText Markup Language) is a skeleton of a website, structuring content with tags and elements.
- **CSS**:CSS is a style sheet language used to style web pages.It enables the application of different styles based on media types and user preferences, enhancing user accessibility and readability
- **JavaScript**:JavaScript is a programming language used to add interactivity to websites.
- **React.js**:A JavaScript library for building user interfaces. It allows developers to create large web applications that can update and render efficiently in response to data changes.

### Backend
<a m="backend"></a>
<p>
<a href="https://www.w3schools.com/nodejs/"><img src="https://e7.pngegg.com/pngimages/247/558/png-clipart-node-js-javascript-express-js-npm-react-github-angle-text.png" alt="Node.js" width="50" height="50" /></a>
<a href="https://www.javatpoint.com/expressjs-tutorial"><img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png" alt="expressjs" width="50" height="50" /></a>
<a href="https://www.mongodb.com/docs/"><img src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" alt="MongoDB" width="50" height="50" /></a>
</p>

- **MongoDB**: A NoSQL database that provides high performance, high availability, and easy scalability. It stores data in flexible, JSON-like documents.
- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, enabling server-side scripting and running scripts server-side to produce dynamic web page content.


## Contributing 📝
Raise and issue; Get assigned and then work on fixing the issue.
We welcome contributions to 75per! Follow these steps to contribute:

- Take a look at the existing [Issues](https://github.com/akshitagupta15june/PetMe/issues) or [create a new issue](https://github.com/AbhiDiva96/75per/issues/new)!
- [Fork the Repo](https://github.com/AbhiDiva96/75per/fork). Then, create a branch for any issue that you are working on. Finally, commit your work.

  ![image](https://github.com/debangi29/75per/assets/117537653/6afe565c-99b5-46c5-92b4-b04bcea1d1aa)

- Create a **[Pull Request](https://github.com/AbhiDiva96/75per/compare)** (_PR_), which will be promptly reviewed and given suggestions for improvements by the community.
- Add screenshots or screen captures to your Pull Request to help us understand the effects of the changes proposed in your PR.
- **DON'T CREATE PRs WITHOUT CREATING ISSUE AND GETTING ASSIGNED**


### How to make a pull request 
<a pr="how-to-make-a-pull-request"></a>

**1.** Start by making a Fork of the [**75per**](https://github.com/AbhiDiva96/75per) repository. Click on the <a href="https://github.com/AbhiDiva96/75per/fork"><img src="https://i.imgur.com/G4z1kEe.png" height="21" width="21"></a>Fork symbol at the top right corner.

**2.** Clone your new fork of the repository in the terminal/CLI on your computer with the following command:

```bash
git clone https://github.com/<your-github-username>/75per
```
![image](https://github.com/debangi29/75per/assets/117537653/e8b35501-9d0b-44e7-ace6-5b2da8562b7b)

**3.** Navigate to the newly created PetMe project directory:

```bash
cd 75per
```

**4.** Set upstream command:

```bash
git remote add upstream https://github.com/AbhiDiva96/75per.git
```

**5.** Create a new branch:

```bash
git checkout -b YourBranchName
```

**6.** Sync your fork or your local repository with the origin repository:

- In your forked repository, click on "Fetch upstream"
- Click "Fetch and merge"

**7.** Make your changes to the source code.

**8.** Stage your changes and commit:

⚠️ **Make sure** not to commit `package.json` or `package-lock.json` file

⚠️ **Make sure** not to run the commands `git add .` or `git add *`. Instead, stage your changes for each file/folder

```bash
git add public
```

```bash
git commit -m "<your_commit_message>"
```

**9.** Push your local commits to the remote repository:

```bash
git push origin YourBranchName
```

**10.** Create a pull request!

### Development Workflow
- Always work on a new branch for each issue or feature.
- Keep your branch up to date with the main repository's master branch.
- Write clear and descriptive commit messages.
- Test your changes thoroughly before submitting a pull request.

### Issue Report Process
1. Go to the project's issues section.
2. Select the appropriate template for your issue.
3. Provide a detailed description of the issue.
4. Wait for the issue to be assigned before starting to work on it.

### **Pull Request Process 🚀**

1. Ensure that you have self reviewed your code.
2. Make sure you have added the proper description for the functionality of the code.
3. I have commented my code, particularly in hard-to-understand areas.
4. Add screenshot it help in review.
5. Submit your PR by giving the necesarry information in PR template and hang tight we will review it really soon.

# Usage ⚙️

After installing the dependencies, you can start the local server:

```bash
npm run start

```

Navigate to `http://localhost:3000` in your web browser to view the application.


## Resources for Beginners 📚
### Basics of Git and GitHub 📂
- [Forking a Repo](https://help.github.com/en/articles/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/articles/cloning-a-repository)
- [Creating a Pull Request](https://help.github.com/en/articles/creating-a-pull-request)
- [Getting Started with Git and GitHub](https://guides.github.com/introduction/git-handbook/)
- [Learn GitHub from Scratch](https://www.youtube.com/watch?v=w3jLJU7DT5E)


## 📍Documentation
- Document any significant changes or additions to the codebase.
- Provide clear explanations of the functionality, usage, and any relevant considerations.

## Code Reviews 🔎
- Be open to feedback and constructive criticism from other contributors.
- Participate in code reviews by reviewing and providing feedback.

## Feature Requests 🔥
- Suggest new features or improvements that would enhance the project.

## Spreading the Word 👐
- Share your experience and the project with others.
- Spread the word about the project on social media, developer forums, or any relevant community platforms.

Thank you for contributing to 75per! Together, we can make a significant impact. Happy coding! 🚀
# Don't forget to ⭐ the repository!
