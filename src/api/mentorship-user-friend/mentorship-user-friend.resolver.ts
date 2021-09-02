import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MentorshipUserFriendService } from './mentorship-user-friend.service';
import { MentorshipUserFriend } from './entities/mentorship-user-friend.entity';
import { CreateMentorshipUserFriendInput } from './dto/create-mentorship-user-friend.input';
import { UpdateMentorshipUserFriendInput } from './dto/update-mentorship-user-friend.input';

@Resolver(() => MentorshipUserFriend)
export class MentorshipUserFriendResolver {
  constructor(
    private readonly mentorshipUserFriendService: MentorshipUserFriendService
  ) {}

  @Mutation(() => MentorshipUserFriend)
  createMentorshipUserFriend(
    @Args('data') data: CreateMentorshipUserFriendInput
  ) {
    return this.mentorshipUserFriendService.create(data);
  }

  @Query(() => [MentorshipUserFriend], { name: 'mentorshipUserFriend' })
  findAll() {
    return this.mentorshipUserFriendService.findAll();
  }

  @Query(() => MentorshipUserFriend, { name: 'mentorshipUserFriend' })
  findOne(@Args('id', { type: () => String }) id: number) {
    return this.mentorshipUserFriendService.findOne(id);
  }

  @Mutation(() => MentorshipUserFriend)
  updateMentorshipUserFriend(
    @Args('data') data: UpdateMentorshipUserFriendInput
  ) {
    return this.mentorshipUserFriendService.update(data.id, data);
  }

  @Mutation(() => MentorshipUserFriend)
  removeMentorshipUserFriend(@Args('id', { type: () => String }) id: number) {
    return this.mentorshipUserFriendService.remove(id);
  }
}
