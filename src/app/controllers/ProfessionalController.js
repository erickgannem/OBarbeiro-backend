import db from '../../database/connection.js';

class ProfessionalController {
  static async index(req, res) {
    try {
      const professionals = await db.Professional.find({});
      if (!professionals.length) throw new Error('No professionals were found');

      return res.status(200).json(professionals);
    } catch (err) {
      return res.status(404).json({ error: err.message });
    }
  }

  static async findOne(req, res) {
    try {
      const foundProfessional = await db.Professional.findById(req.params.id).populate('services', 'name');

      return res.status(200).json(foundProfessional);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  static async store(req, res) {
    try {
      const professional = await db.Professional.create(req.body);
      return res.status(200).json(professional);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  static async update(req, res) {
    const { professionalId } = req.params;
    try {
      const updatedProfessional = await db.Professional.findByIdAndUpdate(professionalId, req.body);
      return res.status(200).json(updatedProfessional);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  static async assignService(req, res) {
    const { professionalId } = req.params;
    const { serviceId } = req.query;

    try {
      const foundProfessional = await db.Professional.findById(professionalId);
      const foundService = await db.Service.findById(serviceId);

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

export default ProfessionalController;
