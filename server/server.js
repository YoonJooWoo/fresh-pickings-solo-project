const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();

const apiRouter = require('../routes/api.js');
const userController = require('../controllers/userController.js');
const cookieController = require('../controllers/cookieController.js');
const sessionController = require('../controllers/sessionController.js');

app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 3000;


const mongoURI = 'mongodb+srv://yjdream:..iZ_fd2atWXE2c@cluster1.4d1skgm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';
// mongodb+srv://yjdream:<password>@cluster1.4d1skgm.mongodb.net/

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'freshpickings'
});



// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle requests for static files
app.use(express.static(path.join('client')));
app.use('/build', express.static(path.resolve(__dirname, '../build')));

// app.get('/seasonal/:itemName', (req, res) => {
//   return res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
// });

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

//define route handlers
// app.use('/api', apiRouter);
app.post('/signup', 
  userController.createUser, 
  cookieController.setSSIDCookie,
  // sessionController.startSession, 
  (req, res) => {
    return res.status(200).redirect('/seasonal');
  });

app.post('/login', 
  userController.verifyUser, 
  cookieController.setSSIDCookie,
  // sessionController.startSession,
  (req, res) => {
    return res.status(200).redirect('/seasonal');
  });

app.post('/logout', sessionController.clearSession, (req, res) => {
  return res.status(200).redirect('/login');
});

app.get('*',(req, res) => {
  return res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});


app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;