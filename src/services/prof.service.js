import Professor from "../models/Professor.js"

const createService = (body) => Professor.create(body)

const findAllService = () => Professor.find()

const findByIdService = (id) => Professor.findById(id)

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
) => Professor.findOneAndUpdate(
    { _id: id },
    { name, lastname, birthdate, gender, address, phonenumber, email, password }
)

export {
    createService,
    findAllService,
    findByIdService,
    updateService
}