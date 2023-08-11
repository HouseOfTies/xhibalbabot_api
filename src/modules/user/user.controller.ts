import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './DTO/user.dto';
import { User } from './schemas/user.schema';
import {
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiCreatedResponse({ description: 'User created successfully.' })
  @ApiConflictResponse({ description: 'User already exists.' })
  @ApiInternalServerErrorResponse({
    description: 'An internal server error has occurred.',
  })
  @Post()
  async create(@Body() userDTO: UserDTO) {
    return this.userService.create(userDTO);
  }

  @ApiOkResponse()
  @ApiNoContentResponse()
  @Get('users')
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findUserByUserId(id);
  }

  /* @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.catsService.delete(id);
  } */
}
