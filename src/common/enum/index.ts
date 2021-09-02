import { registerEnumType } from '@nestjs/graphql';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

export enum AccountStatus {
  Deactivated = 'Deactivated',
  Blocked = 'Blocked',
  Deleted = 'Deleted',
  None = 'None',
}
registerEnumType(AccountStatus, {
  name: 'AccountStatus',
  description: 'Account status',
});

export enum ApplicationStatus {
  Draft = 'Draft',
  Applied = 'Applied',
  Declined = 'Declined',
  Hired = 'Hired',
}
registerEnumType(ApplicationStatus, {
  name: 'ApplicationStatus',
  description: 'Application status',
});

export enum AuthProvider {
  local = 'local',
  facebook = 'facebook',
  google = 'google',
}
registerEnumType(AuthProvider, {
  name: 'AuthProvider',
  description: 'Authentication Provider',
});

export enum FileType {
  Photo = 'Photo',
  Video = 'Video',
  Audio = 'Audio',
  Resume = 'Resume',
  Other = 'Other',
  ProjectDocument = 'ProjectDocument',
  Gallery = 'Gallery',
}
registerEnumType(FileType, {
  name: 'FileType',
  description: 'File Type',
});

export enum FriendRequestAction {
  Request = 'Request',
  Accept = 'Accept',
  Ignore = 'Ignore',
  Delete = 'Delete',
  Follow = 'Follow',
}
registerEnumType(FriendRequestAction, {
  name: 'FriendRequestAction',
  description: 'Friend Request Action',
});

export enum FriendRequestStatus {
  None = 'None',
  Pending = 'Pending',
  Connected = 'Connected',
  Ignored = 'Ignored',
  Requested = 'Requested',
  Deleted = 'Deleted',
  Following = 'Following',
}
registerEnumType(FriendRequestStatus, {
  name: 'FriendRequestStatus',
  description: 'Friend request status',
});

export enum Gender {
  heHim = 'heHim',
  sheHer = 'sheHer',
  theyThem = 'theyThem',
  ratherNotSay = 'ratherNotSay',
  notListedSeeBio = 'notListedSeeBio',
}
registerEnumType(Gender, {
  name: 'Gender',
  description: 'Gender',
});

export enum JobStatus {
  Draft = 'Draft',
  Posted = 'Posted',
  Hiring = 'Hiring',
  Finished = 'Finished',
  Deleted = 'Deleted',
}
registerEnumType(JobStatus, {
  name: 'JobStatus',
  description: 'Job status',
});

export enum MentorshipUserType {
  Mentor = 'Mentor',
  Mentee = 'Mentee',
  Both = 'Both',
}
registerEnumType(MentorshipUserType, {
  name: 'MentorshipUserType',
  description: 'Mentorship user type',
});

export enum PositionStatus {
  Hiring = 'Hiring',
  Filled = 'Filled',
}
registerEnumType(PositionStatus, {
  name: 'PositionStatus',
  description: 'Position status',
});

export enum ReviewStatus {
  Waiting = 'Waiting',
  Approved = 'Approved',
  Rejected = 'Rejected',
  Deleted = 'Deleted',
}
registerEnumType(ReviewStatus, {
  name: 'ReviewStatus',
  description: 'Review status',
});

export enum UserCircleStatus {
  None = 'None',
  Follow = 'Follow',
  Join = 'Join',
  Unfollow = 'Unfollow',
  Leave = 'Leave',
}
registerEnumType(UserCircleStatus, {
  name: 'UserCircleStatus',
  description: 'User circle status',
});

export enum UserType {
  Talent = 'Talent',
  Company = 'Company',
  Admin = 'Admin',
}
registerEnumType(UserType, {
  name: 'UserType',
  description: 'User type',
});
