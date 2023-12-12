import { createService, findAllService, removeByIdService, findByIdService } from '../services/reposta.service.js'

const create = async (req, res) => {
    try {
        const { idaluno, nomealuno, item, descricao, resposta, acerto, tempo } = req.body

        if (!idaluno || !nomealuno || !item || !descricao || !resposta) {
            return res.status(400).send({ message: "Informe todos os campos obrigatorios para registro da resposta" })
        }

        const respo = await createService({
            idaluno,
            nomealuno,
            item,
            descricao,
            resposta,
            acerto,
            tempo
        })

        if(!respo){
            return res.status(400).send({ message: "Erro ao cadastrar a resposta" })
        }

        res.status(201).send({
            message: "Resposta registrada com sucesso",
            resposta: {
                idaluno,
                nomealuno,
                item,
                descricao,
                resposta,
                acerto,
                tempo
            }
        })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const findAll = async (req, res) => { 
    try {
        const respostas = await findAllService()

        if (respostas.length === 0) {
            return res.status(400).send({ message: "Não há respostas cadastradas" })
        }

        res.send(respostas)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const findById = async (req, res) => { //Retorna todas as respostas de um aluno pelo seu ID
    try {
        const { idaluno } = req.body

        const respostas = await findByIdService(idaluno)

        if (!respostas){
            return res.status(400).send({ message: "Respostas não encontradas!" })
        }

        res.send(respostas)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

const removeById = async (req, res) => {
    try {
        const { idaluno } = req.body

        await removeByIdService(idaluno)

        res.send("Repostas removidas com sucesso!")
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export { create, findAll, findById, removeById }