export const knex = require("knex")({
    client: "pg",
    connection: {
        host: "database-1.c6fxehm23nsu.ap-southeast-1.rds.amazonaws.com",
        user: "postgres",
        password: "plasma2021",
        database: "pmiDB"
    }
});