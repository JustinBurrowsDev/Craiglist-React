const mysql = require("mysql")
const config = require("config")

const db = mysql.createPool({
  // how many people are allowed to connect
  connectionLimit: 10,
  // host is the database that you are connecting to
  host: config.get("db.host"),
  // never do this on a actually project, learning purpose only (no password)
  user: config.get("db.user"),
  password: config.get("db.password"),
  database: config.get("db.database")
})

module.exports = db
