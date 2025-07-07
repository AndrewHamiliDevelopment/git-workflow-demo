/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PartialType } from '@nestjs/mapped-types';
import { UsersCreateDto } from './users-create.dto';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class UsersUpdateDto extends PartialType(UsersCreateDto) {
  @IsBoolean()
  @IsNotEmpty()
  enabled: boolean;
}
