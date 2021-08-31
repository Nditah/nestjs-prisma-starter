import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserCircleService } from './user-circle.service';
import { UserCircle } from './entities/user-circle.entity';
import { CreateUserCircleInput } from './dto/create-user-circle.input';
import { UpdateUserCircleInput } from './dto/update-user-circle.input';

@Resolver(() => UserCircle)
export class UserCircleResolver {
  constructor(private readonly userCircleService: UserCircleService) {}

  @Mutation(() => UserCircle)
  createUserCircle(@Args('createUserCircleInput') createUserCircleInput: CreateUserCircleInput) {
    return this.userCircleService.create(createUserCircleInput);
  }

  @Query(() => [UserCircle], { name: 'userCircle' })
  findAll() {
    return this.userCircleService.findAll();
  }

  @Query(() => UserCircle, { name: 'userCircle' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userCircleService.findOne(id);
  }

  @Mutation(() => UserCircle)
  updateUserCircle(@Args('updateUserCircleInput') updateUserCircleInput: UpdateUserCircleInput) {
    return this.userCircleService.update(updateUserCircleInput.id, updateUserCircleInput);
  }

  @Mutation(() => UserCircle)
  removeUserCircle(@Args('id', { type: () => Int }) id: number) {
    return this.userCircleService.remove(id);
  }
}
