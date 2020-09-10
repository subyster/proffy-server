const path = require('path');

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, process.env.ROOT, 'database', 'database.sqlite')
  },
  migrations: {
    directory: path.resolve(__dirname, process.env.ROOT, 'database', 'migrations')
  },
  useNullAsDefault: true,
}