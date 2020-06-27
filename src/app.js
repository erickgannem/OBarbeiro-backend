import { express } from "express";

class App {
  constructor() {
    this.server = express();
  }

  routes() {}
  middlewares() {}
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