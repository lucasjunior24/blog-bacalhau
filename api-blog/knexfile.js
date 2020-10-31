// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "bacalhau",
      user: 'postgres',
      password: '12345678'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }

};
