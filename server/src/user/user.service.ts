import { Inject, Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';
import { Repository } from 'typeorm';
import { CreateUserDto } from './models/create-user.dto';
import { UpdateUserDto } from './models/update-user.dto';
import { User } from './models/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly repository: Repository<User>,
  ) {}

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

  async findOne(_id: ObjectId): Promise<User | null> {
    return this.repository.findOneBy({ _id });
  }

  async findOneByUsername(username: string): Promise<User | null> {
    return this.repository.findOneBy({ username });
  }

  async createOne(dto: CreateUserDto): Promise<User> {
    const entity = this.repository.create(dto);
    return await this.repository.save(entity);
  }

  async updateOne(_id: ObjectId, dto: UpdateUserDto): Promise<User | null> {
    const entity = await this.repository.preload({ _id, ...dto });
    return entity ? this.repository.save(entity) : null;
  }

  async deleteOne(_id: ObjectId): Promise<number | null | undefined> {
    const { affected } = await this.repository.delete({ _id });
    return affected;
  }
}
