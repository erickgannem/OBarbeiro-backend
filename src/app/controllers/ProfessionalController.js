import { Professional } from '../../database/connection.js';

class ProfessionalController {
  static async index(req, res) {
    try {
      const professionals = await Professional.find({});
      return res.status(200).json(professionals);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  static async store(req, res) {
    try {
      const professional = await Professional.create(req.body);
      return res.status(200).json(professional);
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }
}

export default ProfessionalController;
