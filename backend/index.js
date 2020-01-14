/*
Rotas
*/

//importa o express
const express = require('express');

//declara uma instancia de express
const app = express();

//Configurando para o express usar json
app.use(express.json());

//Métodos HTTTP: get, post, put, delete

//Tipos de parâmetros: 
//Query params: request.query (filtros, ordenação e paginação)
//Route params: request.params Iidentificar um recurso na alteração ou remoção)
//Body: request.body (dados para a criação ou alteração de um registro)

//Fazendo uso do método GET
app.get('/users',(request, response)=> {
    console.log(request.query); //método get e retornará os parâmetros passados no Query do Insomnia    
    return response.json({message: 'Hello Omnistack 1.0'});
});

//Fazendo uso do método DELETE
app.delete('/users/:id',(request, response)=> {
    console.log(request.params); //método delete passando número na rota após /users/1
    return response.json({message: 'Hello Omnistack 1.0'});
});

//Fazendo uso do método POST com JSON
app.post('/users',(request, response)=> {    
    console.log(request.body); //método post ou put e retornará o JSON passados no Query do Insomnia
    return response.json({message: 'Hello Omnistack 1.0'});
});

//Informa que a nossa aplicaçao responderá na porta 3333
app.listen(3333);

