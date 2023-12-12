import Aluno from "../models/Aluno.js"

const createService = (body) => Aluno.create(body)

const findAllService = () => Aluno.find()

const findByIdService = (id) => Aluno.findById(id)

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
    removeByIdService,
    updateService
}