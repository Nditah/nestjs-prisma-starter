import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MentorshipUserService } from './mentorship-user.service';
import { MentorshipUser } from './entities/mentorship-user.entity';
import { CreateMentorshipUserInput } from './dto/create-mentorship-user.input';
import { UpdateMentorshipUserInput } from './dto/update-mentorship-user.input';

@Resolver(() => MentorshipUser)
export class MentorshipUserResolver {
  constructor(private readonly mentorshipUserService: MentorshipUserService) {}

  @Mutation(() => MentorshipUser)
  createMentorshipUser(@Args('createMentorshipUserInput') createMentorshipUserInput: CreateMentorshipUserInput) {
    return this.mentorshipUserService.create(createMentorshipUserInput);
  }

  @Query(() => [MentorshipUser], { name: 'mentorshipUser' })
  findAll() {
    return this.mentorshipUserService.findAll();
  }

  @Query(() => MentorshipUser, { name: 'mentorshipUser' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.mentorshipUserService.findOne(id);
  }

  @Mutation(() => MentorshipUser)
  updateMentorshipUser(@Args('updateMentorshipUserInput') updateMentorshipUserInput: UpdateMentorshipUserInput) {
    return this.mentorshipUserService.update(updateMentorshipUserInput.id, updateMentorshipUserInput);
  }

  @Mutation(() => MentorshipUser)
  removeMentorshipUser(@Args('id', { type: () => Int }) id: number) {
    return this.mentorshipUserService.remove(id);
  }
}
