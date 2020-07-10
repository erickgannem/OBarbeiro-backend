import { User } from '../../database/connection.js';

class UserController {
  static async index(req, res) {
    try {
      const users = await User.find({});
      return res.status(200).json(users);
    } catch (err) {
      return res.status(400).json({ message: 'Internal server error' });
    }
  }

  static async store(req, res) {
    try {
      const user = await User.create(req.body);

      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ message: 'Error creating new user' });
    }
  }
}

export default UserController;
