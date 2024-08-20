import {Router} from 'express'
import { getHistory, addHistory } from '../controllers/history.js'

const router = Router()

router.get('/history', getHistory)
router.post('/history/:id', addHistory)

export default router