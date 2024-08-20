import { connect } from '../db.js'

export const getCar = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM CARS WHERE user_id = ?', 
        [
            req.params.id
        ]
    )
    console.log(rows)
    res.json(rows)
}