import { Router } from 'express'
import { create, findAll } from '../controllers/resposta.controller.js'

const router = Router()

router.post('/', create)
router.get('/', findAll)

export default router