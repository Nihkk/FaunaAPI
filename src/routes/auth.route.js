import { Router } from 'express'
const router = Router()

import { loginAluno } from '../controllers/auth.controller.js'

router.post('/aluno', loginAluno) //Efetua o login do aluno

export default router