import db from '../../database/connection.js';

class ServiceController {
  static async index(req, res) {
    try {
      const services = await db.Service.find({});
      if (!services.length) throw new Error('No services were found');

      return res.status(200).json(services);
    } catch (err) {
      return res.status(404).json({ error: err.message });
    }
  }

  static async store(req, res) {
    try {
      const service = await db.Service.create(req.body);
      return res.status(200).json(service);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  static async assignProfessional(req, res) {
    const { serviceId } = req.params;
    const { professionalId } = req.query;

    try {
      const foundService = await db.Service.findById(serviceId);
      const foundProfessional = await db.Professional.findById(professionalId);

      const { services } = foundProfessional;
      const { professionals } = foundService;

      if (!services.includes(serviceId)) {
        foundProfessional.services.push(serviceId);
        await foundProfessional.save();
      }
      if (!professionals.includes(professionalId)) {
        foundService.professionals.push(professionalId);
        await foundService.save();
      }

      return res.status(200).json({ message: 'Operation succeded' });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export default ServiceController;
