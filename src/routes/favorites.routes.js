import { Router } from 'express'
import { createFavorite, deleteFavorite, getFavorites } from '../controllers/favoriteController.js'

const router = Router()

router.get('/favorites', getFavorites)
router.post('/favorite', createFavorite)
router.delete('/favorite/:id', deleteFavorite)

export default router