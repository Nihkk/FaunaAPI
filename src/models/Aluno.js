import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const AlunoSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    birthdate: {
        type: String,
        required: true
    },
    gender: {
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

AlunoSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

const Aluno = mongoose.model('Alunos', AlunoSchema)

export default Aluno