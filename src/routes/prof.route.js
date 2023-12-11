import { Router } from 'express'
import { create, findAll, findById, update } from '../controllers/prof.controller.js'
import { validId, validUser } from "../middlewares/global.middlewares.js"
import { authMiddleware } from '../middlewares/auth.middleware.js'


const router = Router()

router.post('/', create) //Cadastra um professor
router.get('/', findAll) //Retorna todos os professores cadastrados
router.get('/perfil', authMiddleware, validId, validUser, findById)
router.patch('/:id', validId, validUser, update)

export default router