import {Router} from 'express'
import { getCar } from '../controllers/carController.js'

const router = Router()

router.get('/car/:id', getCar)

export default router