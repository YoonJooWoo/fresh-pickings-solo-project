const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

// const apiRouter = require('./routes/api');
app.use(cors());

const PORT = process.env.PORT || 3000;

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



app.get('*',(req, res) => {
  return res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

// app.get('/seasonal/details/', async (req, res) => {
//   try {
//     const response = await fetch('https://www.fruityvice.com/api/fruit/all');
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.get('/api')

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });



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