import { Router } from 'express'
import { 
    create, 
    filterByEscola, 
    filterByNome, 
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
router.post('/nome', filterByNome)
router.post('/escola', filterByEscola)
router.post('/remove', removeById)
router.patch('/:id', update)

export default router