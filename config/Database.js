import { Sequelize } from "sequelize"
const db = new Sequelize('bltccfz5y4ey473u5n9i', 'uppgcoz8idgo1a0w',  'rG5coiBHKIxGOwFl7Wen', {
    host: "bltccfz5y4ey473u5n9i-mysql.services.clever-cloud.com",
    dialect: "mysql"
})

export default db
// import mysql from 'mysql2'

// const db = mysql.createPool({
//     host: process.env.DB_HOST, 
//     user: process.env.DB_USERNAME, 
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DBNAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// db.getConnection((err, conn) => {
//     if(err) console.log(err)
//     console.log("Connected successfully")
// })

// export default db