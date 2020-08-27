import express from 'express';

import UserController from './app/controllers/UserController.js';
import ProfessionalController from './app/controllers/ProfessionalController.js';
import ServiceController from './app/controllers/ServiceController.js';

const { Router } = express;

const routes = new Router();

routes.get('/api/users', UserController.index);
routes.post('/api/users', UserController.store);

routes.get('/api/professionals', ProfessionalController.index);
routes.get('/api/professionals/:id', ProfessionalController.findOne);
routes.post('/api/professionals', ProfessionalController.store);
routes.post('/api/professionals/:professionalId', ProfessionalController.assignService);
routes.put('/api/professionals/:professionalId', ProfessionalController.update);

routes.get('/api/services', ServiceController.index);
routes.get('/api/services/:serviceId', ServiceController.findOne);
routes.post('/api/services', ServiceController.store);
routes.post('/api/services/:serviceId', ServiceController.assignProfessional);

routes.get('/api/availability', (req, res) => res.status(200).json({ message: '/api/availability' }));

export default routes;
