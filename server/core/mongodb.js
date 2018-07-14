const mongoose = require('mongoose');
// const Mongoose = mongoose.Mongoose;
const _ = require('lodash');
const config = require('../config/database.json');

/**
 * 连接mongodb数据库
 */
exports.initialize = () => {
  // const instance = new Mongoose();
  const {
    host,
    port,
    user,
    pass,
    database,
    authenticationDatabase,
    ssl,
    debug,
    useNewUrlParser
  } = config;

  const connectOptions = {};
  const options = {};

  if (!_.isEmpty(user)) {
    connectOptions.user = user;

    if (!_.isEmpty(pass)) {
      connectOptions.pass = pass;
    }
  }

  if (!_.isEmpty(authenticationDatabase)) {
    connectOptions.authSource = authenticationDatabase;
  }

  connectOptions.useNewUrlParser =
    useNewUrlParser === true || useNewUrlParser === 'true';

  connectOptions.ssl = ssl === true || ssl === 'true';

  options.debug = debug === true || debug === 'true';

  return mongoose.connect(
    `mongodb://${host}:${port}/${database}`,
    connectOptions
  ).then(() => {
    console.log('MongoDB database is connected successfully.');
  },
  error => {
    if (error.message.indexOf(`:${port}`)) {
      console.error('Make sure your MongoDB database is running!');
    } else {
      console.log(error.message);
    }
  })
};
