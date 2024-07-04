# LMS_SiteSculptors
connection string - mongodb://localhost:27017/

High-level overview of the project structure:
LMS_SiteSculptors/
├── backend/
│   ├── models/
│   │   ├── book.js
│   │   └── user.js
│   ├── routes/
│   │   ├── books.js
│   │   └── users.js
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── BookList.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   ├── package.json
│   └── .env
├── package.json
└── README.md

To run the React application you have, follow these steps:

1. **Install Node.js and npm**: Make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download and install them from [nodejs.org](https://nodejs.org/).

2. **Navigate to your project directory**: Open a terminal or command prompt and change the directory to the location of your React project. If your project is in a folder named `my-react-app`, you can navigate to it using:
    ```sh
    cd /path/to/my-react-app
    ```

3. **Install dependencies**: Once you are in the project directory, run the following command to install all the necessary dependencies listed in the `package.json` file:
    ```sh
    npm install
    ```

4. **Start the development server**: After the dependencies are installed, you can start the development server using:
    ```sh
    npm start
    ```
    This will run the `start` script defined in your `package.json` file, which uses `react-scripts` to start the server. The application should open in your default web browser at `http://localhost:3000`.
