import {Router} from 'express'
import { getHistory, addHistory } from '../controllers/history.js'

const router = Router()

router.get('/history/:id', getHistory)
router.post('/history/:id', addHistory)

export default router