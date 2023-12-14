import Aluno from "../models/Aluno.js"

const createService = (body) => Aluno.create(body)

const findAllService = () => Aluno.find()

const findByIdService = (id) => Aluno.findById(id)

const findByProfService = (id) => Aluno.find({idprof: id})

const filterByNomeService = (id) => Aluno.find({idprof: id}).collation({'locale':'en'}).sort({nome: 1})

const filterByEscolaService = (id, escola) => Aluno.find({
    $and: [
        {idprof: id},
        {escola: {$regex: escola, $options: 'i'}}
    ]
}
).collation({'locale':'en'}).sort({nome: 1})

const removeByIdService = (id) => Aluno.findByIdAndDelete(id)

const updateService = (
    id,
    nome,
    datanasc,
    genero,
    escola,
    serie
) => Aluno.findOneAndUpdate(
    { _id: id },
    { nome, datanasc, genero, escola, serie }
)

export {
    createService,
    findAllService,
    findByIdService,
    findByProfService,
    filterByNomeService,
    filterByEscolaService,
    removeByIdService,
    updateService
}