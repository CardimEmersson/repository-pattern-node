import { Repository, getCustomRepository } from 'typeorm';
import { User } from '../entities/User';
import { UserRepository } from '../repositories/UsersRepository';

class UserService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UserRepository);
  }

  async create(name: string) {
    const user = this.usersRepository.create({
      name,
    });

    await this.usersRepository.save(user);

    return user;
  }
}

export { UserService };
