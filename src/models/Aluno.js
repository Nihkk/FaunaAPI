import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const AlunoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    datanasc: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    escola: {
        type: String,
    },
    serie: {
        type: String,
        required: true
    },
    idprof: {
        type: String,
        required: true
    }
})

const Aluno = mongoose.model('Alunos', AlunoSchema)

export default Aluno