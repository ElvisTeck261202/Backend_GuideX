import { connect } from '../db.js'

export const getHistory = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM history WHERE user_id = ?',
        [
            req.params.id
        ]
    )
    return await res.json(rows)
}

export const addHistory = async (req, res) => {
    const connection = await connect()
    const [results] = await connection.query('INSERT INTO history (date, from_place, to_place, user_id) VALUES (?, ?, ?, ?)',
        [
            req.body.date,
            req.body.from_placem,
            req.body.to_place,
            req.params.id
        ]
    )
    res.sendStatus(204)
}