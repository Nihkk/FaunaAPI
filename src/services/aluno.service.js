import Aluno from "../models/Aluno.js"

const createService = (body) => Aluno.create(body)

const findAllService = () => Aluno.find()

const findByIdService = (id) => Aluno.findById(id)

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
    updateService
}