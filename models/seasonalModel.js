const mongoose = require('mongoose');

// const MONGO_URI = '';

// mongoose.connect(MONGO_URI, {
//   // useNewUrlParser: true;
//   // useUnifiedTopology: true;
//   dbName: 'solo project'
// })
//   .then(() => console.log('Connected to Mongo DB.'))
//   .catch(err => console.log(err));

const Schema = mongoose.Schema;

const vegetableSchema = new Schema({
  name: String,
  availableMonths: [String] 
});

const Vegetable = mongoose.model('Vegetable', vegetableSchema);


const fruitSchema = new Schema({
  name: String,
  availableMonths: [String]
});

const Fruit = mongoose.model('Fruit', fruitSchema);




module.exports = {
  Vegetable,
  Fruit,
};