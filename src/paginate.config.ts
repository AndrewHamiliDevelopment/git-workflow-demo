import { PaginateConfig } from 'nestjs-paginate';
import { Users } from './users/entities/users.entity';

export const usersPaginateConfig: PaginateConfig<Users> = {
  sortableColumns: ['dateEntry'],
};
