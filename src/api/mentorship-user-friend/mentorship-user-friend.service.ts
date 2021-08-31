import { Injectable } from '@nestjs/common';
import { CreateMentorshipUserFriendInput } from './dto/create-mentorship-user-friend.input';
import { UpdateMentorshipUserFriendInput } from './dto/update-mentorship-user-friend.input';

@Injectable()
export class MentorshipUserFriendService {
  create(createMentorshipUserFriendInput: CreateMentorshipUserFriendInput) {
    return 'This action adds a new mentorshipUserFriend';
  }

  findAll() {
    return `This action returns all mentorshipUserFriend`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mentorshipUserFriend`;
  }

  update(id: number, updateMentorshipUserFriendInput: UpdateMentorshipUserFriendInput) {
    return `This action updates a #${id} mentorshipUserFriend`;
  }

  remove(id: number) {
    return `This action removes a #${id} mentorshipUserFriend`;
  }
}