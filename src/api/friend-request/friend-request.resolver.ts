import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FriendRequestService } from './friend-request.service';
import { FriendRequest } from './entities/friend-request.entity';
import { CreateFriendRequestInput } from './dto/create-friend-request.input';
import { UpdateFriendRequestInput } from './dto/update-friend-request.input';

@Resolver(() => FriendRequest)
export class FriendRequestResolver {
  constructor(private readonly friendRequestService: FriendRequestService) {}

  @Mutation(() => FriendRequest)
  createFriendRequest(@Args('data') data: CreateFriendRequestInput) {
    return this.friendRequestService.create(data);
  }

  @Query(() => [FriendRequest], { name: 'friendRequest' })
  findAll() {
    return this.friendRequestService.findAll();
  }

  @Query(() => FriendRequest, { name: 'friendRequest' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.friendRequestService.findOne(id);
  }

  @Mutation(() => FriendRequest)
  updateFriendRequest(@Args('data') data: UpdateFriendRequestInput) {
    return this.friendRequestService.update(data.id, data);
  }

  @Mutation(() => FriendRequest)
  removeFriendRequest(@Args('id', { type: () => String }) id: string) {
    return this.friendRequestService.remove(id);
  }
}
