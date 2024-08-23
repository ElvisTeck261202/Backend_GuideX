import { connect } from '../db.js'

export const login = async (req, res) => {
    const connection = await connect();
    console.log(req.body)
    const [rows] = await connection.query('SELECT * FROM USERS WHERE username = ? AND password = ?',
        [
            req.body.username,
            req.body.pass
        ]
    )
    console.log(rows)
    return res.json(rows)
}

export const signup = async (req, res) => {
    const connection = await connect();
    const [result] = await connection.query('SELECT * FROM licenses WHERE license = ?', 
        [
            req.body.license
        ]
    )
    console.log(result)
    if (result[0]){
        console.log('Aqui se tiene que ir si esta en la base de datos')
        console.log(result[0].id)
        const [rows] = await connection.query('INSERT INTO users (username, password, license_id) VALUES (?, ?, ?)',
            [
                req.body.username,
                req.body.pass,
                result[0].id
            ]
        )
        res.json({
            id: rows.insertId,
            ... req.body
        })
    }
    else{
        console.log('Por aqui no')
        res.json('That License doesn\'t exist ')
    }
}

export const getUser = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query('SELECT * FROM USERS WHERE id = ?',
        [
            req.params.id
        ]
    );
    console.log(results[0])
    return res.json(results[0])
}