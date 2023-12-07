import Aluno from "../models/Aluno.js"

const createService = (body) => Aluno.create(body)

const findAllService = () => Aluno.find()

const findByIdService = (id) => Aluno.findById(id)

const updateService = (
    id,
    name,
    lastname,
    birthdate,
    gender,
    address,
    phonenumber,
    email,
    password
) => Aluno.findOneAndUpdate(
    { _id: id },
    { name, lastname, birthdate, gender, address, phonenumber, email, password }
)

export {
    createService,
    findAllService,
    findByIdService,
    updateService
}