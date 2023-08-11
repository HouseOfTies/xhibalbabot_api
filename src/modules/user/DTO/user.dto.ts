import { ApiProperty } from '@nestjs/swagger';
import { IUser } from 'src/shared/interfaces/IUser.interface';

export class UserDTO implements IUser {
  @ApiProperty()
  id: number;

  @ApiProperty()
  is_bot: boolean;

  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name?: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  language_code?: string;

  @ApiProperty()
  permission?: number;

  /* @ApiProperty()
  token?: number; */

  @ApiProperty()
  createdAt?: Date;

  @ApiProperty()
  updatedAt?: Date;

  @ApiProperty({ default: false })
  deleted?: boolean;

  @ApiProperty()
  coins?: number;
}
