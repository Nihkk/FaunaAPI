import { Router } from 'express'
import { create, findAll, findById } from '../controllers/resposta.controller.js'

const router = Router()

router.post('/', create)
router.get('/', findAll)
router.post('/return', findById)

export default router