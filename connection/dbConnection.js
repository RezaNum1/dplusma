export const knex = require("knex")({
    client: "pg",
    connection: {
        host: "dplusma.cyt2nxuztyho.ap-southeast-1.rds.amazonaws.com",
        user: "postgres",
        password: "plasmaDonor",
        database: "dplusma"
    }
});