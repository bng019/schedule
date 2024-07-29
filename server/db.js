const Pool = require("pg").Pool;

const pool = new Pool({
    user: "asdf",
    password: "a",
    host: "localhost",
    port: 5432,
    database: "backend_schedule"
});

module.exports = pool;