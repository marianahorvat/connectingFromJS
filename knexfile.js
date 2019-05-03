// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: { //process.env.DATABASE_URL
      filename: './dev.pg',
      database: 'test_db',
      user: 'development',
      password: 'development',
      host: 'localhost'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};