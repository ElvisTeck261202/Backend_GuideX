import { login, signup, getUser } from '../controllers/userController.js'
import { Router } from 'express'

const router = Router();

router.post('/login', login)
router.post('/signup', signup)
router.get('/user/:id', getUser)

export default router