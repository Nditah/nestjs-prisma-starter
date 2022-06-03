import { ObjectType, Field, HideField, InputType } from '@nestjs/graphql';

import { AccountStatus, AuthProvider, Role, UserType } from 'src/common/enum';
import { Post } from './post.model';
import { BaseModel } from './base.model';
import { Talent } from 'src/api/talent/entities/talent.entity';
import { Location } from 'src/api/location/entities/location.entity';
import { Setting } from 'src/api/setting/entities/setting.entity';

@InputType('UserInput')
@ObjectType({ description: 'User model' })
export class User extends BaseModel {
  @Field(() => String, { description: 'User email address' })
  email: string;

  @Field(() => String, { description: 'User username' })
  username: string;

  @Field(() => String, { description: 'User first name' })
  firstName?: string;

  @Field(() => String, { description: 'User last name' })
  lastName?: string;

  @Field(() => Role, { description: 'User role' })
  role: Role;

  @HideField()
  password: string;

  @Field(() => String, { description: 'User avatar URL' })
  avatarUrl?: string;

  @Field(() => Boolean, { description: 'Has User email been verified' })
  emailVerified?: boolean;

  @Field(() => String, { description: 'User type' })
  userType?: UserType;

  @Field(() => String, { description: 'User authentication provider' })
  provider?: AuthProvider;

  @Field(() => String, { description: 'User overview' })
  overview?: string;

  @Field(() => String, { description: 'User facebook URL' })
  facebookUrl?: string;

  @Field(() => String, { description: 'User linkedin URL' })
  linkedinUrl?: string;

  @Field(() => String, { description: 'User instagram URL' })
  instagramUrl?: string;

  @Field(() => String, { description: 'User twitter URL' })
  twitterUrl?: string;

  @Field(() => String, { description: 'User website' })
  website?: string;

  @Field(() => String, { description: 'User youtube URL' })
  youtubeUrl?: string;

  @Field(() => Talent, { description: 'User Talent' })
  talent?: Talent;

  @Field(() => String, { description: 'User settings' })
  settings?: Setting[];

  @Field(() => String, { description: 'User address' })
  address?: string;

  @Field(() => String, { description: 'User phone number' })
  phoneNumber?: string;

  @Field(() => AccountStatus, { description: 'User account status' })
  accountStatus?: AccountStatus;

  @Field(() => Location, { description: 'User location' })
  location?: Location;

  @Field(() => String, { description: 'User coverImage' })
  coverImage?: string;

  @Field(() => Boolean, { description: 'User stream joined' })
  streamJoined?: boolean;

  @Field(() => Boolean, { description: 'User sendbird joined' })
  sendbirdJoined?: boolean;

  @Field(() => String, { description: 'User permissions' })
  permissions?: string;

  @Field(() => String, { description: 'User restore password code' })
  restorePasswordCode?: string;

  //* Relationships

  @Field(() => [Post], { description: 'User posts' })
  posts?: Post[];
}
