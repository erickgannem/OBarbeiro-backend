import express from 'express';

import ClientController from "./app/controllers/ClientController.js";

const { Router } = express;

const routes = new Router();

routes.get('/api', (req, res) => {
  res.status(200).json({ message: "Welcome to O'Barbeiro app API" });
});

routes.get('/api/services', (req, res) => res.status(200).json({ message: '/api/services' }));

routes.get('/api/professionals', (req, res) => res.status(200).json({ message: '/api/professionals' }));

routes.get('/api/availability', (req, res) => res.status(200).json({ message: '/api/availability' }));


export default routes;
