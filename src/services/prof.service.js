import Professor from "../models/Professor.js"

const createService = (body) => Professor.create(body)

const findAllService = () => Professor.find()

const findByIdService = (id) => Professor.findById(id)

const updateService = (
    id,
    nome,
    datanasc,
    genero,
    estado,
    instituicao,
    ocupacao
) => Professor.findOneAndUpdate(
    { _id: id },
    { nome, datanasc, genero, estado, instituicao, ocupacao }
)

export {
    createService,
    findAllService,
    findByIdService,
    updateService
}