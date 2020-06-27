import express from 'express';

const { Router } = express;

const routes = new Router();

routes.get('/api', (req, res) => {
  res.status(200).json({message: "Hello World"})
});

export default routes;