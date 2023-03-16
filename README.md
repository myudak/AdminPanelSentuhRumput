# Sentuh Rumput Admin Panel

Sentuh Rumput is a solution developed as a media for people to find a green open space for the use of space that can increase the quality of health in physically and mentally.

# Features

highlight some key essentials of the admin panel features such as:

- CRUD Users
- CRUD Reports
- CRUD Submisi
- CRUD Submissions
- Send Notifications

# Demo

https://www.youtube.com/watch?v=HhgJs9lOf6Q

# Proposals

Read more about our proposal here: https://s.id/sentuh-rumput

# Main App repository

https://github.com/snowfluke/sentuh-rumput

# Installation

## General requirement

Software that needed:

- Node.js v16.16.0
  Download: https://nodejs.org/en/blog/release/v16.16.0/

Assuming Node.js already installed, check the version in terminal/cmd with the command:

```bash
node --version
```

Installing package manager `yarn` with command:

```bash
npm i -g yarn
```

Install packages with `yarn `

```bash
yarn install
```

`yarn` run with development server

```bash
yarn dev
```

# Credentials

You need to manually provide these 1 files

1. firebaseConfig.js

Location to put: `pages\lib\firebaseConfig.js`. This file is required for the api-key. The content of the file is as follow:

```js
const firebaseConfig = {
  apiKey: "AIza******************",
  authDomain: "sentuh-rumput.firebaseapp.com",
  projectId: "sentuh-rumput",
  storageBucket: "sentuh-rumput.appspot.com",
  messagingSenderId: "684957327996",
  appId: "1:684957327996:web:d56ae70a610a57cd2d9ff9",
};
```

You can find the api-key in Firebase Console -> Project Settings
