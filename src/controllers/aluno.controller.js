import { createService, findAllService, removeByIdService, updateService } from '../services/aluno.service.js'

const create = async (req, res) => {
    try {
        const { nome, datanasc, genero, escola, serie } = req.body

        if (!nome || !datanasc || !genero || !escola || !serie) {
            return res.status(400).send({ message: "Informe todos os campos obrigatorios para registro" })
        }

        const user = await createService({ 
            nome,  
            datanasc, 
            genero, 
            escola, 
            serie 
        })

        if (!user) {
            return res.status(400).send({ message: "Erro ao criar o usuário" })
        }

        res.status(201).send({
            message: "Usuario criado com sucesso",
            user: {
                id: user._id,
                nome,
                datanasc,
                genero,
                escola,
                serie
            },
        })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const findAll = async (req, res) => {
    try {
        const users = await findAllService()

        if (users.length === 0) {
            return res.status(400).send({ message: "Não há usuarios cadastrados" })
        }

        res.send(users)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const findById = async (req, res) => {
    try {
        const user = req.user

        res.send(user)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const removeById = async (req, res) => {
    try {
        const { id } = req.body

        await removeByIdService(id)

        res.send("Aluno removido com sucesso!")

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const update = async (req, res) => {
    try {
        const { name, lastname, birthdate, gender, address, phonenumber, email, password, confirmpassword } = req.body

        if (!name && !lastname && !birthdate && !gender && !address && !email && !password && !confirmpassword) {
            return res.status(400).send({ message: "Informe pelo menos um campo para atualização" })
        }

        const id = req.id

        await updateService(
            id,
            name,
            lastname,
            birthdate,
            gender,
            address,
            phonenumber,
            email,
            password
        )

        res.send({ message: "Usuário atualizado com sucesso!" })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export { create, findAll, findById, removeById, update }