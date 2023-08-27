import convict from "convict";

const config = convict( {
  env: {
    doc: "The application environment.",
    format: ["production", "development", "test"],
    default: "development",
    env: "NODE_ENV",
  },
  port: {
    doc: "The port to bind.",
    format: "port",
    default: 3000,
    env: "PORT",
    arg: "port",
  },
  db: {
    host: {
      doc: "Database host name/IP",
      format: "*",
      default: "server1.dev.test",
      env: "DB_HOST",
    },
    name: {
      doc: "Database name",
      format: String,
      default: "users",
      env: "DB_NAME",
    },
    port: {
      doc: "Database port",
      format: Number,
      default: 5432,
      env: "DB_PORT",
    },
    username: {
      doc: "Database username",
      format: String,
      default: "users",
      env: "DB_USERNAME",
    },
    password: {
      doc: "Database password",
      format: String,
      default: "pass",
      env: "DB_PASSWORD",
    },
  },
});

config.validate({allowed: 'strict'});
export default config;
