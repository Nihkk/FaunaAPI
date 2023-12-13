import { Router } from 'express'
import { 
    create, 
    findAll, 
    findById, 
    findByProf, 
    removeById, 
    update 
} from '../controllers/aluno.controller.js'

const router = Router()

router.post('/', create) //Cadastra um aluno
router.get('/', findAll) //Retorna todos os alunos cadastrados
router.post('/perfil', findById)
router.post('/prof', findByProf)
router.post('/remove', removeById)
router.patch('/:id', update)

export default router