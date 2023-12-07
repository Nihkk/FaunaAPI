import mongoose from 'mongoose'

const RespostaSchema = new mongoose.Schema({
    idaluno: {
        type: String,
        required: true,
        unique: false,
    },
    nomealuno: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true,
    },
    descricao: {
        type: String
    },
    resposta: {
        type: String
    },
    acerto: {
        type: Boolean
    },
    tempo: {
        type: String
    }
})

const Resposta = mongoose.model('Respostas', RespostaSchema)

export default Resposta

