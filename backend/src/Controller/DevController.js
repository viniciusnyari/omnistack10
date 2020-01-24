const axios = require('axios');
const Dev = require('../Models/Dev');
const ParseStringAsArray = require('../Utils/ParseStringArray');
const { findConnections, sendMessage } = require('../websocket');


//index, show, store, update, destroy

module.exports = {

    async index(request, response) { 
        const devs = await Dev.find();
        return response.json(devs);
    },

    async store(request, response) {    
        //console.log(request.body); //método post ou put e retornará o JSON passados no Query do Insomnia
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({github_username});

        if(!dev){

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
            //busca name, porém se estiver nulo, busca login
            const { name = login, avatar_url, bio } = apiResponse.data;
        
            const techsArray = ParseStringAsArray(techs);
            
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            };
        
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            });  
            
             //Filtras as conexões que estão no máximo em 10km de distância e o DEV tenha 
            //pelo menos uma das tecnologias (techs)
            const sendSocketMessageTo = findConnections(
                { latitude, longitude },
                techsArray,
            );

            sendMessage(sendSocketMessageTo,'new-dev',dev);
        }   

        return response.json(dev);
    }
};