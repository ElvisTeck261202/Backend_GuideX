import mysql from "mysql2/promise";

export const connect = async (req, res) => {
    return await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "uriel123", //Recuerda cambiar este con tu password, si preguntas por la base de datos, en la carpeta db esta el script que tienes que correr :)
        database: "guideX"
    })
}