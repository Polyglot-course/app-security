const { Pool } = require('pg')

const pool = new Pool({
    user: process.env.DB_POSTGRES_USER,
    password: process.env.DB_POSTGRES_PASSWORD,
    database: process.env.DB_POSTGRES_DATABASE_SECURITY,
    host: process.env.DB_POSTGRES_HOST,
    port: process.env.DB_POSTGRES_SECURITY_PORT
})

const authRepository = {
    getUsersByCredentials: async (userName, password) => {
        var results = await pool.query('SELECT * FROM usercredential WHERE username=$1 AND password=$2', [userName, password])
        return results.rows
    }
}

module.exports = authRepository;