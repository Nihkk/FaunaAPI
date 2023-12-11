import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const ProfSchema = new mongoose.Schema({
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
    },
    estado: {
        type: String,
    },
    instituicao: {
        type: String,
        required: true
    },
    ocupacao: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    confirmpassword: {
        type: String,
    }
})

ProfSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

const Professor = mongoose.model('Professor', ProfSchema)

export default Professor