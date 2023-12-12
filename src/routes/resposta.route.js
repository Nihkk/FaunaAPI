import { Router } from 'express'
import { create, findAll, findById, removeById } from '../controllers/resposta.controller.js'

const router = Router()

router.post('/', create)
router.get('/', findAll)
router.post('/return', findById)
router.post('/remove', removeById)

export default router