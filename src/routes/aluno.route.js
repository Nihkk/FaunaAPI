import { Router } from 'express'
import { create, findAll, findById, removeById, update } from '../controllers/aluno.controller.js'
import { validId, validUser } from "../middlewares/global.middlewares.js"
import { authMiddleware } from '../middlewares/auth.middleware.js'


const router = Router()

router.post('/', create) //Cadastra um aluno
router.get('/', findAll) //Retorna todos os alunos cadastrados
router.get('/perfil', authMiddleware, validId, validUser, findById)
router.post('/remove', removeById)
router.patch('/:id', validId, validUser, update)

export default router