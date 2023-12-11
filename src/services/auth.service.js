import Professor from '../models/Professor.js'
import jwt from 'jsonwebtoken'

const loginServiceProf = (email) => Professor.findOne({email: email}).select("+password")

const generateToken = (id) => jwt.sign({id: id}, process.env.SECRET_JWT, {expiresIn: 86400})

export { loginServiceProf, generateToken }