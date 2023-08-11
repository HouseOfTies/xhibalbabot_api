import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IUser } from 'src/shared/interfaces/IUser.interface';
import { v4 as uuid } from 'uuid';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User implements IUser {
  @Prop({ required: true, unique: true })
  id: number;

  @Prop()
  is_bot: boolean;

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop({ unique: true })
  username: string;

  @Prop()
  language_code: string;

  @Prop()
  permission: number;

  @Prop({ default: Date.now() })
  createdAt: Date;

  @Prop({ default: Date.now() })
  updatedAt: Date;

  @Prop({ default: false })
  deleted: boolean;

  @Prop({ default: 350 })
  coins: number;

  @Prop({ default: uuid })
  token: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
