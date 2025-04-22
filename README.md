# 🥕 Fresh Pickings

**Seasonal produce and recipe discovery application**  
Built with React, Node.js, and Express

## 🌱 Overview

Fresh Pickings is a web application that helps users discover seasonal produce and corresponding recipes. It integrates complex OpenAPI calls with multiple layers of dependencies via RESTful API endpoints, providing real-time data updates.

## ✨ Features

- 🌿 Discover what's in season near you
- 🍽️ Get delicious recipes using seasonal ingredients
- ⚡ Real-time data fetching through RESTful APIs
- 🧠 Intelligent integration with external OpenAPI sources

## 🛠 Tech Stack

- **Frontend**: React (.jsx files with multiple components)
- **Backend**: Node.js + Express
- **Language**: JavaScript
- **Bundler**: Webpack
- **Dev Tools**: Nodemon

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/your-username/fresh-pickings.git
   cd fresh-pickings

2. Install dependencies:

    ```bash
    npm install

3. Start the development server:

    ```bash
    nodemon servre/server.js

## 🧩 Project Structure

    <pre>``` fresh-pickings/ ├── client/ # React frontend (.jsx) │ ├── assets/ │ ├── components/ │ ├── data/ │ ├── stylesheets/ │ ├── App.jsx │ ├── Header.jsx │ ├── index.html │ └── index.js ├── controllers/ # Backend controllers │ ├── cookieController.js │ ├── sessionController.js │ └── userController.js ├── models/ # Database models │ ├── seasonalModel.js │ ├── sessionModel.js │ └── userModel.js ├── routes/ # API routes │ └── api.js ├── server/ # Express server │ └── server.js ├── .babelrc ├── package-lock.json ├── package.json └── webpack.config.js ``` </pre>