import express from 'express'
import carRouter from './routes/cars.routes.js'
import userRouter from './routes/users.routes.js'
import favoriteRouter from './routes/favorites.routes.js'
import historyRouter from './routes/history.routes.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use(carRouter)
app.use(userRouter)
app.use(favoriteRouter)
app.use(historyRouter)

app.listen(3000)
console.log('Server running on port 3000')