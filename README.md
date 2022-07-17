<h1 align="center">
	<!-- <img alt="Logo" src=".github/logo.png" width="200px" /> -->
  Shop Monorepo
</h1>

<h3 align="center">Microfrontends arquitecture with Webpack Module Federation</h3>

<p align="center">

  <a href="https://www.linkedin.com/in/ldmscn/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Leonardo%20Damascecno-gree">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/dmscn/microfrontends">
  
  <a href="https://github.com/dmscn/microfrontends/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/dmscn/microfrontends">
  </a>
  
  <a href="https://github.com/dmscn/microfrontends/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/dmscn/microfrontends">
  </a>
  
  <img alt="GitHub" src="https://img.shields.io/github/license/dmscn/microfrontends">
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>
  &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>

<img alt="Layout" src="https://res.cloudinary.com/eliasgcf/image/upload/v1586302738/assets/previewApp_fnt7hm.png">

## 👨🏻‍💻 About the project

 <p>Studies related to microfrontend arquitecture using a Webpack Module Federation solution</p>

## 🚀 Technologies

Technologies that I used to develop this api

- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [React Router DOM](https://reacttraining.com/react-router/)
- [Styled Components](https://styled-components.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 💻 Getting started

- Run `npm start` inside `/server` folder to start the server providing mocked data (using `@faker-js`)
- Run `npm start` inside `/cart` and `/products` to enable the mfe remotes
- Run `npm start` inside `/shell` to start the mfe shell application

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/dmscn/microfrontends.git && cd microfrontends
```

**Follow the steps below**

### Backend

```bash
# Starting from the project root folder, go to backend folder
$ cd server

# Install the dependencies
$ npm i

# Once the services are running, start the server
$ npm start:dev

# Well done, the server must be up and running!
```

### MFE Remotes

_Obs.: Before to continue, be sure to have the API running_

```bash
# Starting from the project root folder, go to products folder
$ cd products

# Install the dependencies
$ npm i

# Start the products MFE
$ npm start:dev
```

```bash
# Starting from the project root folder, go to cart folder
$ cd cart

# Install the dependencies
$ npm i

# Start the cart MFE
$ npm start:dev
```

### Shell application

_Obs.: Before to continue, be sure to have the API and remotes running_

```bash
# Starting from the project root folder, go to shell folder
$ cd shell

# Install the dependencies
$ npm i

# Start the shell MFE
$ npm start:dev
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by Leonardo Damasceno 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/ldmscn/)
