import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
    user: "postgres",
    database: "PepitoDB",
    password: "admin",
    host: "localhost",
    port: 5432
})
export default pool
