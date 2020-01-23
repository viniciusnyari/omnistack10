const socketio = require('socket.io');
const parseStringAsArray = require('./Utils/ParseStringArray');
const calculateDistance = require('./Utils/calculateDistance');

const connections =[];

exports.setupWebsocket = (server) => {
    const io = socketio(server);

    io.on('connection',socket => {
       const { latitude, longitude, techs } = socket.handshake.query;

        connections.push({
            id: socket.id,
            coordinates : {
                latitude : Number(latitude),
                longitude: Number(longitude)
            },
            techs: parseStringAsArray(techs),
        });
    });    
};

exports.findConnections = (coordinates,techs) => {
    console.log('findConnections');
    
    console.log('coordinates...');
    console.log(coordinates);
    
    console.log('techs......');
    console.log(techs);    

    return connections.filter(connection => {

        console.log(calculateDistance(coordinates, connection.coordinates));
        console.log(connection.techs.some(item=> techs.includes(item)));

        return calculateDistance(coordinates, connection.coordinates) < 10
        && connection.techs.some(item=> techs.includes(item));
    });
}