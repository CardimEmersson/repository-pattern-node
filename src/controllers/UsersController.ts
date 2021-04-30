import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const usersService = new UserService();

    const user = await usersService.create(name);

    return response.json(user);
  }
}

export { UsersController };
