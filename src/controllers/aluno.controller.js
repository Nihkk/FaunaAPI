import { 
    createService, 
    filterByEscolaService, 
    filterByNomeService, 
    findAllService, 
    findByIdService,
    findByProfService, 
    removeByIdService, 
    updateService 
} from '../services/aluno.service.js'

const create = async (req, res) => {
    try {
        const { nome, datanasc, genero, escola, serie, idprof } = req.body

        if (!nome || !datanasc || !genero || !escola || !serie || !idprof) {
            return res.status(400).send({ message: "Informe todos os campos obrigatorios para registro" })
        }

        const user = await createService({ 
            nome,  
            datanasc, 
            genero, 
            escola, 
            serie,
            idprof 
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
                serie,
                idprof
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
            return res.status(400).send({ messsage: "Não há usuarios cadastrados" })
        }

        res.send(users)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const findById = async (req, res) => {
    try {
        const { id } = req.body

        const user = await findByIdService(id)

        if(!user) {
            return res.status(400).send({ message: "Este aluno não está cadastrado." })
        }

        res.send(user)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const findByProf = async (req, res) => {
    try {
        const { idprof } = req.body

        const users = await findByProfService(idprof)

        if(!users) {
            return res.status(400).send({ message: "Este professor não possui alunos cadastrados" })
        }

        res.send(users)
    } catch (error) {
        
    }
}

const filterByNome = async (req, res) => {
    try {
        const { idprof } = req.body

        const users = await filterByNomeService(idprof)

        if (users.length === 0) {
            return res.status(400).send({ messsage: "Não há usuarios cadastrados" })
        }

        res.send(users)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const filterByEscola = async (req, res) => {
    try {
        const { idprof, escola } = req.body

        const users = await filterByEscolaService(idprof, escola)

        if (users.length === 0) {
            return res.status(400).send({ messsage: "Não há alunos desta escola cadastrados" })
        }

        res.send(users)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const removeById = async (req, res) => {
    try {
        const { id } = req.body

        await removeByIdService(id)

        res.send({message: "Aluno removido com sucesso!"})

    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const update = async (req, res) => {
    try {
        const { nome, datanasc, genero, escola, serie } = req.body

        if (!nome && !datanasc && !genero && !escola && !serie) {
            return res.status(400).send({ message: "Informe pelo menos um campo para atualização" })
        }

        const { id } = req.params

        await updateService(
            id,
            nome,
            datanasc,
            genero,
            escola,
            serie
        )

        res.send({ message: "Usuário atualizado com sucesso!" })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export { 
    create, 
    findAll, 
    findById, 
    findByProf,
    filterByNome,
    filterByEscola,
    removeById, 
    update 
}