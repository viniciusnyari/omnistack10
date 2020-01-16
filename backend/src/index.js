//Esse é o arquivo principal do node

//Importa o express
const express = require('express');

//Importando mongoose para usar o mongoDB
const mongoose = require('mongoose');

//Importando as rotas
const routes = require('./routes')

//Importando cors - permite que o backend seja acessado pelo front - padrão não consegue
const cors = require('cors');

//declara uma instancia de express
const app = express();

//Conexão ao mongoDB
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-v120u.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


//Libera acesso para toda aplicação que tentar se conectar a ela
app.use(cors());

//Configurando para o express usar json
app.use(express.json());

//Usando as rotas
app.use(routes);


//Informa que a nossa aplicaçao responderá na porta 3333
app.listen(3333);

