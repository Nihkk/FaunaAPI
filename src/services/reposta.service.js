import Resposta from '../models/Resposta.js'

const createService = (body) => Resposta.create(body)

const findAllService = () => Resposta.find()

const findByIdService = (id) => Resposta.find({idaluno: id}) 

export {
    createService, 
    findAllService,
    findByIdService
}