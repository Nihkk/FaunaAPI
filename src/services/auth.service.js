import Aluno from '../models/Aluno.js'
import jwt from 'jsonwebtoken'

const loginServiceAluno = (email) => Aluno.findOne({email: email}).select("+password")

const generateToken = (id) => jwt.sign({id: id}, process.env.SECRET_JWT, {expiresIn: 86400})

export { loginServiceAluno, generateToken }