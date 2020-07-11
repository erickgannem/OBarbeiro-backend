import express from 'express';

import UserController from './app/controllers/UserController.js';
import ProfessionalController from './app/controllers/ProfessionalController.js';

const { Router } = express;

const routes = new Router();

routes.get('/api', (req, res) => {
  res.status(200).json({ message: "Welcome to O'Barbeiro app API" });
});

routes.get('/api/users', UserController.index);
routes.post('/api/users', UserController.store);

routes.get('/api/services', (req, res) => res.status(200).json({ message: '/api/services' }));

routes.get('/api/professionals', (req, res) => res.status(200).json({ message: '/api/professionals' }));

routes.post('/api/professionals', ProfessionalController.store);

routes.get('/api/availability', (req, res) => res.status(200).json({ message: '/api/availability' }));

export default routes;
