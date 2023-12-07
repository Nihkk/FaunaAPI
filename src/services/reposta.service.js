import Resposta from '../models/Resposta.js'

const createService = (body) => Resposta.create(body)

const findAllService = () => Resposta.find()

export {
    createService, 
    findAllService
}