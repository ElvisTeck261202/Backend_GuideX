import mysql from "mysql2/promise";

export const connect = async (req, res) => {
    return await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "uriel123",
        database: "guideX"
    })
}