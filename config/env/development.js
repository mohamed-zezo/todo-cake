// Required in /app/config/config.js
// Express app environment config for production

var port = process.env.PORT || 5000;

module.exports = {
  port: port,
  db: 'mongodb://localhost:27017/todoit-app'
};
