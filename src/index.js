import express from 'express'
import connectDatabase from './database/db.js'
import dotenv from 'dotenv'
import cors from 'cors'

import alunoRoute from './routes/aluno.route.js'
import authRoute from './routes/auth.route.js'
import respostaRoute from './routes/resposta.route.js'

dotenv.config()

const app = express()

//Config
    //Conexão com o banco
        connectDatabase()

//Rotas
    app.use(express.json())
    app.use(cors())

    app.use('/aluno', alunoRoute)
    app.use('/auth', authRoute)
    app.use('/resposta', respostaRoute)

//Função utilizada para abrir uma conexão com o cliente
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})