import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserCircleService } from './user-circle.service';
import { UserCircle } from './entities/user-circle.entity';
import { CreateUserCircleInput } from './dto/create-user-circle.input';
import { UpdateUserCircleInput } from './dto/update-user-circle.input';

@Resolver(() => UserCircle)
export class UserCircleResolver {
  constructor(private readonly userCircleService: UserCircleService) {}

  @Mutation(() => UserCircle)
  createUserCircle(@Args('data') data: CreateUserCircleInput) {
    return this.userCircleService.create(data);
  }

  @Query(() => [UserCircle], { name: 'userCircle' })
  findAll() {
    return this.userCircleService.findAll();
  }

  @Query(() => UserCircle, { name: 'userCircle' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.userCircleService.findOne(id);
  }

  @Mutation(() => UserCircle)
  updateUserCircle(@Args('data') data: UpdateUserCircleInput) {
    return this.userCircleService.update(data.id, data);
  }

  @Mutation(() => UserCircle)
  removeUserCircle(@Args('id', { type: () => String }) id: string) {
    return this.userCircleService.remove(id);
  }
}
