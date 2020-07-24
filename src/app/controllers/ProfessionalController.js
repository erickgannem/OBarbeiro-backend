import db from '../../database/connection.js';

class ProfessionalController {
  static async index(req, res) {
    try {
      const professionals = await db.Professional.find({});
      if (!professionals.length) throw new Error('No professinals were found');

      return res.status(200).json(professionals);
    } catch (err) {
      return res.status(404).json(err);
    }
  }

  static async store(req, res) {
    try {
      const professional = await db.Professional.create(req.body);
      return res.status(200).json(professional);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}

export default ProfessionalController;
