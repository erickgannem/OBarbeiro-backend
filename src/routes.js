import express from 'express';

import UserController from './app/controllers/UserController.js';
import ProfessionalController from './app/controllers/ProfessionalController.js';
import ServiceController from './app/controllers/ServiceController.js';
import Professional from './database/models/Professional.js';

const { Router } = express;

const routes = new Router();

routes.get('/api/users', UserController.index);
routes.post('/api/users', UserController.store);

routes.get('/api/professionals', ProfessionalController.index);
routes.post('/api/professionals', ProfessionalController.store);
routes.post('/api/professionals/:professionalId', ProfessionalController.assignService);

routes.get('/api/services', ServiceController.index);
routes.post('/api/services', ServiceController.store);
routes.post('/api/services/:serviceId', ServiceController.assignProfessional);

routes.get('/api/availability', (req, res) => res.status(200).json({ message: '/api/availability' }));

export default routes;
