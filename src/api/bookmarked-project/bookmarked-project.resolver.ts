import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookmarkedProjectService } from './bookmarked-project.service';
import { BookmarkedProject } from './entities/bookmarked-project.entity';
import { CreateBookmarkedProjectInput } from './dto/create-bookmarked-project.input';
import { UpdateBookmarkedProjectInput } from './dto/update-bookmarked-project.input';

@Resolver(() => BookmarkedProject)
export class BookmarkedProjectResolver {
  constructor(
    private readonly bookmarkedProjectService: BookmarkedProjectService
  ) {}

  @Mutation(() => BookmarkedProject)
  createBookmarkedProject(@Args('data') data: CreateBookmarkedProjectInput) {
    return this.bookmarkedProjectService.create(data);
  }

  @Query(() => [BookmarkedProject], { name: 'bookmarkedProject' })
  findAll() {
    return this.bookmarkedProjectService.findAll();
  }

  @Query(() => BookmarkedProject, { name: 'bookmarkedProject' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.bookmarkedProjectService.findOne(id);
  }

  @Mutation(() => BookmarkedProject)
  updateBookmarkedProject(@Args('data') data: UpdateBookmarkedProjectInput) {
    return this.bookmarkedProjectService.update(data.id, data);
  }

  @Mutation(() => BookmarkedProject)
  removeBookmarkedProject(@Args('id', { type: () => Int }) id: number) {
    return this.bookmarkedProjectService.remove(id);
  }
}
