import { User } from '../../database/connection.js';

class UserController {
  static async index(req, res) {
    try {
      const users = await User.find({});
      if (!users.length) throw new Error('No users were found');

      return res.status(200).json(users);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  }

  static async store(req, res) {
    try {
      const user = await User.create(req.body);

      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}

export default UserController;
