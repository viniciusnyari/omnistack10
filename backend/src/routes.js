const { Router} = require('express');
const axios = require('axios');
const Dev = require('./Models/Dev');
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

//Fazendo uso do método POST com JSON
routes.post('/devs', async (request, response)=> {    
    //console.log(request.body); //método post ou put e retornará o JSON passados no Query do Insomnia
    const { github_username, techs } = request.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    //busca name, porém se estiver nulo, busca login
    const { name = login, avatar_url, bio } = apiResponse.data;

    const techsArray = techs.split(',').map(tech=> tech.trim());
    
    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray
    });

    return response.json(dev);
});

//exportando as rotas desse arquivo
module.exports = routes; 
