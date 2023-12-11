import { Router } from 'express'
const router = Router()

import { loginProf } from '../controllers/auth.controller.js'

router.post('/prof', loginProf) //Efetua o login do professor

export default router