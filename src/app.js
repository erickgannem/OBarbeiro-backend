import express from "express";
import routes from "./routes.js";
class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
  }

  routes() {
    this.server.use(routes);
  }

  middlewares() {
    this.server.use(express.json());
  }
  
  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if(process.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }
      return res.status(500).json({error: 'Internal server error'});
    })
  }
}

export default new App().server;