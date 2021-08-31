import { ObjectType, registerEnumType, HideField } from '@nestjs/graphql';
import { Post } from './post.model';
import { BaseModel } from './base.model';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class User extends BaseModel {
  email: string;
  firstname?: string;
  lastname?: string;
  role: Role;
  posts: Post[];
  @HideField()
  password: string;

  avatarUrl?: string;
  emailVerified?: string;
  userType?: string;
  provider?: string;
  providerId?: string;
  overview?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
  website?: string;
  youtubeUrl?: string;
  company?: string;
  companyId?: string;
  talent?: string;
  files?: string;
  experience?: string;
  settings?: string;
  address?: string;
  phoneNumber?: string;
  accountStatus?: string;
  location?: string;
  locationId?: string;
  coverImage?: string;
  streamJoined?: string;
  sendbirdJoined?: string;
  permissions?: string;
  restorePasswordCode?: string;
}
