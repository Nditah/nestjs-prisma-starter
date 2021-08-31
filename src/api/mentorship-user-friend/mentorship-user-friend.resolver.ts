import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MentorshipUserFriendService } from './mentorship-user-friend.service';
import { MentorshipUserFriend } from './entities/mentorship-user-friend.entity';
import { CreateMentorshipUserFriendInput } from './dto/create-mentorship-user-friend.input';
import { UpdateMentorshipUserFriendInput } from './dto/update-mentorship-user-friend.input';

@Resolver(() => MentorshipUserFriend)
export class MentorshipUserFriendResolver {
  constructor(private readonly mentorshipUserFriendService: MentorshipUserFriendService) {}

  @Mutation(() => MentorshipUserFriend)
  createMentorshipUserFriend(@Args('createMentorshipUserFriendInput') createMentorshipUserFriendInput: CreateMentorshipUserFriendInput) {
    return this.mentorshipUserFriendService.create(createMentorshipUserFriendInput);
  }

  @Query(() => [MentorshipUserFriend], { name: 'mentorshipUserFriend' })
  findAll() {
    return this.mentorshipUserFriendService.findAll();
  }

  @Query(() => MentorshipUserFriend, { name: 'mentorshipUserFriend' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mentorshipUserFriendService.findOne(id);
  }

  @Mutation(() => MentorshipUserFriend)
  updateMentorshipUserFriend(@Args('updateMentorshipUserFriendInput') updateMentorshipUserFriendInput: UpdateMentorshipUserFriendInput) {
    return this.mentorshipUserFriendService.update(updateMentorshipUserFriendInput.id, updateMentorshipUserFriendInput);
  }

  @Mutation(() => MentorshipUserFriend)
  removeMentorshipUserFriend(@Args('id', { type: () => Int }) id: number) {
    return this.mentorshipUserFriendService.remove(id);
  }
}
