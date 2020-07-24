import db from '../../database/connection.js';

class UserController {
  static async index(req, res) {
    try {
      const users = await db.User.find({});
      if (!users.length) throw new Error('No users were found');

      return res.status(200).json(users);
    } catch (err) {
      return res.status(404).json(err);
    }
  }

  static async store(req, res) {
    try {
      const user = await db.User.create(req.body);

      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json(err);
    }
  }
}

export default UserController;
