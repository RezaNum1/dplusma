export const knex = require("knex")({
    client: "pg",
    connection: {
        host: "dplusma.cyt2nxuztyho.ap-southeast-1.rds.amazonaws.com",
        user: "postgres",
        password: "plasmaDonor",
        database: "dplusma"
    },
    pool: {
        min: 2,
        max: 6,
        createTimeoutMillis: 3000,
        acquireTimeoutMillis: 30000,
        idleTimeoutMillis: 30000,
        reapIntervalMillis: 1000,
        createRetryIntervalMillis: 100,
        propagateCreateError: false // <- default is true, set to false
      }
});


// connection: {
//     host: "database-1.c6fxehm23nsu.ap-southeast-1.rds.amazonaws.com",
//     user: "postgres",
//     password: "plasma2021",
//     database: "pmiDB"
// }