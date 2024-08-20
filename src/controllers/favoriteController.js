import { connect } from '../db.js'

export const getFavorites = async (req, res) => {
    const connection = await connect()
    const [results] = await connection.query('SELECT * FROM favorites WHERE user_id = ?',
        [
            req.params.id
        ]
    )
    console.log(results)
    res.json(results)
}
 
export const createFavorite = async (req, res) => {
    const connection = await connect()
    const [results] = await connection.query('INSERT INTO favorites (place_name, coord, user_id) VALUES (?. ?, ?)', 
        [
            req.body.p_name,
            req.body.coord,
            req.params.id
        ]
    )
    res.sendStatus(204)
}

export const deleteFavorite = async (req, res) => {
    const connection = await connect()
    const [user] = await connection.query('SELECT * FROM favorites where id = ?',
        [
            req.params.id
        ]
    )
    const [results] = await connection.query('DELETE FROM favorites WHERE id = ?', 
        [
            req.params.id
        ]
    )
    res.json(user)
}