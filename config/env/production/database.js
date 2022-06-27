module.exports = ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT", "postgres"),
    connection: {
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", true), // For remote database
      },
    },
  },
});
