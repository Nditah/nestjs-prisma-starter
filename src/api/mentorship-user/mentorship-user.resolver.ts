import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MentorshipUserService } from './mentorship-user.service';
import { MentorshipUser } from './entities/mentorship-user.entity';
import { CreateMentorshipUserInput } from './dto/create-mentorship-user.input';
import { UpdateMentorshipUserInput } from './dto/update-mentorship-user.input';

@Resolver(() => MentorshipUser)
export class MentorshipUserResolver {
  constructor(private readonly mentorshipUserService: MentorshipUserService) {}

  @Mutation(() => MentorshipUser)
  createMentorshipUser(@Args('data') data: CreateMentorshipUserInput) {
    return this.mentorshipUserService.create(data);
  }

  @Query(() => [MentorshipUser], { name: 'mentorshipUser' })
  findAll() {
    return this.mentorshipUserService.findAll();
  }

  @Query(() => MentorshipUser, { name: 'mentorshipUser' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.mentorshipUserService.findOne(id);
  }

  @Mutation(() => MentorshipUser)
  updateMentorshipUser(@Args('data') data: UpdateMentorshipUserInput) {
    return this.mentorshipUserService.update(data.id, data);
  }

  @Mutation(() => MentorshipUser)
  removeMentorshipUser(@Args('id', { type: () => String }) id: string) {
    return this.mentorshipUserService.remove(id);
  }
}
