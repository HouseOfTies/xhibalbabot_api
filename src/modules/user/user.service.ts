import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { UserDTO } from './DTO/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async create(userDto: UserDTO): Promise<User> {
    try {
      const createUser = new this.userModel(userDto);
      return await createUser.save();
    } catch (error) {
      if (error.code === 11000) {
        throw new ConflictException('This user id already exist');
      }
      throw error;
    }
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findUserByUserId(id: number): Promise<User> {
    return this.userModel.findOne({ id }).exec();
  }
}
