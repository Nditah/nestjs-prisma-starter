import { ObjectType, Field, HideField } from '@nestjs/graphql';

import { AccountStatus, AuthProvider, Role, UserType } from 'src/common/enum';
import { ViewedProject } from 'src/api/viewed-project/entities/viewed-project.entity';
import { Post } from './post.model';
import { BaseModel } from './base.model';
import { Talent } from 'src/api/talent/entities/talent.entity';
import { Company } from 'src/api/company/entities/company.entity';
import { FileItem } from 'src/api/file-item/entities/file-item.entity';
import { Experience } from 'src/api/experience/entities/experience.entity';
import { Location } from 'src/api/location/entities/location.entity';
import { Setting } from 'src/api/setting/entities/setting.entity';
import { Award } from 'src/api/award/entities/award.entity';
import { Education } from 'src/api/education/entities/education.entity';
import { BookmarkedJob } from 'src/api/bookmarked-job/entities/bookmarked-job.entity';
import { BookmarkedProject } from 'src/api/bookmarked-project/entities/bookmarked-project.entity';
import { ProjectApplication } from 'src/api/project-application/entities/project-application.entity';
import { FriendRequest } from 'src/api/friend-request/entities/friend-request.entity';
import { JobApplication } from 'src/api/job-application/entities/job-application.entity';
import { MentorshipUser } from 'src/api/mentorship-user/entities/mentorship-user.entity';
import { UserCircle } from 'src/api/user-circle/entities/user-circle.entity';
import { ViewedJob } from 'src/api/viewed-job/entities/viewed-job.entity';
import { Project } from 'src/api/project/entities/project.entity';

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

  @Field(() => Company, { description: 'User Company' })
  company?: Company;

  @Field(() => Talent, { description: 'User Talent' })
  talent?: Talent;

  @Field(() => [FileItem], { description: 'User files' })
  files?: FileItem[];

  @Field(() => [Experience], { description: 'User experiences' })
  experiences?: Experience[];

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

  @Field(() => [Award], { description: 'User awards' })
  awards?: Award[];

  @Field(() => [Post], { description: 'User posts' })
  posts?: Post[];

  @Field(() => [Education], { description: 'User education history' })
  educations?: Education[];

  @Field(() => [BookmarkedJob], { description: 'User bookmarked jobs' })
  bookmarkedJobs?: BookmarkedJob[];

  @Field(() => [ViewedProject], { description: 'User viewed projects' })
  viewedProjects?: ViewedProject[];

  @Field(() => [BookmarkedProject], { description: 'User bookmarked projects' })
  bookmarkedProjects?: BookmarkedProject[];

  @Field(() => [ProjectApplication], {
    description: 'User project applications',
  })
  projectApplications?: ProjectApplication[];

  @Field(() => [FriendRequest], {
    description: 'User friend-requests as sender',
  })
  friendRequestsAsRequester?: FriendRequest[];

  @Field(() => [FriendRequest], {
    description: 'User friend-requests as receiver',
  })
  friendRequestsAsReceiver?: FriendRequest[];

  @Field(() => [JobApplication], { description: 'User job applications' })
  jobApplications?: JobApplication[];

  @Field(() => [MentorshipUser], { description: 'User mentorship users' })
  mentorshipUsers?: MentorshipUser[];

  @Field(() => [UserCircle], { description: 'User circles' })
  userCircles?: UserCircle[];

  @Field(() => [ViewedJob], { description: 'User viewed jobs' })
  viewedJobs?: ViewedJob[];

  @Field(() => [Project], { description: 'User projects' })
  projects?: Project[];
}
