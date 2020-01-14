//Esse é o arquivo principal do node

//Importa o express
const express = require('express');

//Importando mongoose para usar o mongoDB
const mongoose = require('mongoose');

//Importando as rotas
const routes = require('./routes')

//declara uma instancia de express
const app = express();

//Conexão ao mongoDB
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-v120u.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Configurando para o express usar json
app.use(express.json());

//Usando as rotas
app.use(routes);

//Informa que a nossa aplicaçao responderá na porta 3333
app.listen(3333);

