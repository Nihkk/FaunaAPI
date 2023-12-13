import mongoose from 'mongoose'
import { findByIdService } from '../services/prof.service.js'

export const validId = (req, res, next) => {
    try {
        const id = req.userId;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({ message: "ID inválido!" })
        }

        next()
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}

export const validUser = async (req, res, next) => {
    try {
        const id = req.userId;

        const user = await findByIdService(id)

        if (!user) {
            return res.status(400).send({ message: "Usuario não encontrado" })
        }

        req.id = id
        req.user = user

        next()
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}
