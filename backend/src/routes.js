const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Rota de login na aplicação
routes.post('/sessions', SessionController.create);

//Rotas para manipulação das Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Rota do perfil que está utilizando a aplicação
routes.get('/profile', ProfileController.index);

//Rotas para manipulação dos Incidentes
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;
