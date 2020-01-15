const { Router} = require('express');
const DevController = require('./Controller/DevController');
const SearchController = require('./Controller/SearchController');

const routes = Router();

//Métodos HTTTP: get, post, put, delete

//Tipos de parâmetros: 
//Query params: request.query (filtros, ordenação e paginação)
//Route params: request.params Iidentificar um recurso na alteração ou remoção)
//Body: request.body (dados para a criação ou alteração de um registro)
//MongoDB (não relacional) - https://www.mongodb.com/cloud/atlas
//mongodb+srv://omnistack:<password>@cluster0-v120u.mongodb.net/test?retryWrites=true&w=majority

//Fazendo uso do método GET
routes.get('/users',(request, response)=> {
    console.log(request.query); //método get e retornará os parâmetros passados no Query do Insomnia    
    return response.json({message: 'Hello Omnistack 1.0'});
});

//Fazendo uso do método DELETE
routes.delete('/users/:id',(request, response)=> {
    console.log(request.params); //método delete passando número na rota após /users/1
    return response.json({message: 'Hello Omnistack 1.0'});
});

//Fazendo uso do método GET com JSON
routes.get('/devs', DevController.index);

//Fazendo uso do método POST com JSON
routes.post('/devs', DevController.store);

//Fazendo uso do método GET com JSON
routes.get('/search', SearchController.index);

//exportando as rotas desse arquivo
module.exports = routes; 
