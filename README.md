# Buutti Full Stack Task

This is the solution to butti full stack task.

Below you can find the necessary details about the app.

## App

#### `/buutti/client`

- React.js
- CSS
- TypeScript
- Formik

#### `/buutti/server`

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

NOTE: YOU NEED NODE.JS INSTALLED ON YOUR MACHINE

1. Clone the project to your local system
2. Head to the project root `/buutti`
3. Go to `/buutti/server` and create a `.env` file where we will save our mongodb connection uri

- Copy and paste the following into the `.env` file. `MONGODB_URI=mongodb+srv://username:password@buutti.gky0e6m.mongodb.net/bookApp?retryWrites=true&w=majority` 
- You will have to replace username and password with the credentials I have provided to you via email.

4. Head back to the project root at `/buutti` and run `npm start` at the root directory

- This will first install the necessary packages in `/buutti/server` and `/buutti/client`
- After installation it will concurrently run `/buutti/server` and `/buutti/client` via the command `npm start`

5. App opens automatically at localhost:3000 in your favorite browser (if it doesn't open automatically, type it manually)
6. You're good to go

## Usage

First of all, its not designed to be pretty, just focused on functionality.

1. Click on an existing book and a form will open.
2. You can either (Save, Save New, Delete or Cancel) while the form modal is open

- Save -> update the chosen book
- Save New -> creates a new book
- Delete -> delete the chosen book
- Cancel -> return to list of books

## Author

- Joa Leitola
