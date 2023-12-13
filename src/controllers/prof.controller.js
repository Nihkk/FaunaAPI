import { createService, findAllService, updateService } from '../services/prof.service.js'

const create = async (req, res) => {
    try {
        const confirmpassword = req.body.confirmpassword
        const { nome, datanasc, genero, estado, instituicao, ocupacao, email, password } = req.body

        if (!nome || !datanasc || !instituicao || !ocupacao || !email || !password || !confirmpassword) {
            return res.status(400).send({ message: "Informe todos os campos obrigatorios para registro" })
        }

        if (confirmpassword != password) {
            return res.status(400).send({ message: "A confirmação de senha está incorreta!" })
        }

        const user = await createService({ 
            nome,  
            datanasc, 
            genero,
            estado,
            instituicao,
            ocupacao, 
            email, 
            password 
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
                estado,
                instituicao,
                ocupacao, 
                email 
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

const update = async (req, res) => {
    try {
        const { nome, datanasc, genero, estado, instituicao, ocupacao } = req.body

        if (!nome && !datanasc && !genero && !estado && !instituicao && !ocupacao) {
            return res.status(400).send({ message: "Informe pelo menos um campo para atualização" })
        }

        const { id } = req.params

        await updateService(
            id,
            nome,
            datanasc,
            genero,
            estado,
            instituicao,
            ocupacao
        )

        res.send({ message: "Usuário atualizado com sucesso!" })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export { create, findAll, findById, update }