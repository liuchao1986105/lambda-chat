const mongoose = require('mongoose');
const config = require('../config/mongo-config');

const db = (process.env.NODE_ENV === 'production') 
      ? mongoose.connect("mongodb://liuchao:jingjing134@106.14.30.242:27017/lambda-chat")
      :mongoose.connect("mongodb://" + config.HOST + ":" + config.PORT + "/" + config.NAME);
module.exports = db;