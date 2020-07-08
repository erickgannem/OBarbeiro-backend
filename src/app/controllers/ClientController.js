import { User } from '../../database/connection.js';

class ClientController {
  async index(req, res) {
    try {
      const users = await User.find({});
      console.log(users);
      return res.status(200).json(users);
    } catch (err) {
      return res.status(400).json({ message: 'Internal server error' });
    }
  }
}

export default new ClientController();
