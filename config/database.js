const mongoose = require('mongoose');
const MONGO = process.env.MONGO_URI

mongoose.connect(MONGO).then(
  () => console.log('Database connection established'),
  err => console.log(err)
).catch(err => console.log(err))