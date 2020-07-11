import { Service } from '../../database/connection.js';

class ServiceController {
  static async index(req, res) {
    try {
      const services = await Service.find({});
      return res.status(200).json(services);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  static async store(req, res) {
    try {
      const service = await Service.create(req.body);
      return res.status(200).json(service);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

export default ServiceController;
