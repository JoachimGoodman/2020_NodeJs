const credentials = require("./config/mysqlCredentials.json");

const { knexSnakeCaseMappers } = require('objection');

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host:     '178.20.216.100',
      database: 'jsgndk_nodejs1',
      user:     'jsgndk_nodejs1',
      password: 'UgAAUBhzWEiX%ynnB0KzKG*Y3PR@a7@5jCGKBJiEPObSL@nl8W'
    },
    ...knexSnakeCaseMappers()
  }

}