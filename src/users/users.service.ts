import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { paginate, PaginateQuery } from 'nestjs-paginate';
import { usersPaginateConfig } from 'src/paginate.config';
import { UsersCreateDto } from './dto/users-create.dto';
import { UsersUpdateDto } from './dto/users-update.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users) private readonly repository: Repository<Users>,
  ) {}

  list = async (query: PaginateQuery) => {
    return paginate(query, this.repository, usersPaginateConfig);
  };

  getById = async (id: number) => {
    const user = await this.repository.findOne({ where: { id } });
    if (user === null) {
      throw new NotFoundException(`User ID: ${id} not found`);
    }

    return user;
  };

  create = async (dto: UsersCreateDto) => {
    const { email, firstName, lastName } = dto;
    return await this.repository.save({ email, lastName, firstName });
  };

  update = async (id: number, dto: UsersUpdateDto) => {
    const { enabled, email, firstName, lastName } = dto;
    const user = await this.repository.findOne({ where: { id } });
    if (user === null) {
      throw new NotFoundException(`User ID: ${id} not found`);
    }
    return await this.repository.save({
      id,
      enabled,
      email,
      firstName,
      lastName,
    });
  };
}
