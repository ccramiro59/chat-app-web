import { Inject, Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly repository: Repository<User>,
  ) {}

  private async hashPassword(value: string): Promise<string> {
    return hash(value, 10);
  }

  async findAll({
    page,
    items,
  }: {
    page: number;
    items: number;
  }): Promise<[User[], number]> {
    return this.repository.findAndCount({
      skip: (page - 1) * items,
      take: items,
    });
  }

  async createOne(dto: CreateUserDto): Promise<User> {
    const entity = this.repository.create(dto);
    entity.password = await this.hashPassword(dto.password);
    return await this.repository.save(entity);
  }
}
