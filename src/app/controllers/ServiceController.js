import db from '../../database/connection.js';

class ServiceController {
  static async index(req, res) {
    try {
      const services = await db.Service.find({});
      if (!services.length) throw new Error('No services were found');

      return res.status(200).json(services);
    } catch (err) {
      return res.status(404).json(err);
    }
  }

  static async store(req, res) {
    try {
      const service = await db.Service.create(req.body);
      return res.status(200).json(service);
    } catch (err) {
      return res.status(400).json(err);
    }
  }

  static async setProfessional(req, res) {}
}

export default ServiceController;
