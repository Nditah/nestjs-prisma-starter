import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookmarkedProjectService } from './bookmarked-project.service';
import { BookmarkedProject } from './entities/bookmarked-project.entity';
import { CreateBookmarkedProjectInput } from './dto/create-bookmarked-project.input';
import { UpdateBookmarkedProjectInput } from './dto/update-bookmarked-project.input';

@Resolver(() => BookmarkedProject)
export class BookmarkedProjectResolver {
  constructor(private readonly bookmarkedProjectService: BookmarkedProjectService) {}

  @Mutation(() => BookmarkedProject)
  createBookmarkedProject(@Args('createBookmarkedProjectInput') createBookmarkedProjectInput: CreateBookmarkedProjectInput) {
    return this.bookmarkedProjectService.create(createBookmarkedProjectInput);
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
  updateBookmarkedProject(@Args('updateBookmarkedProjectInput') updateBookmarkedProjectInput: UpdateBookmarkedProjectInput) {
    return this.bookmarkedProjectService.update(updateBookmarkedProjectInput.id, updateBookmarkedProjectInput);
  }

  @Mutation(() => BookmarkedProject)
  removeBookmarkedProject(@Args('id', { type: () => Int }) id: number) {
    return this.bookmarkedProjectService.remove(id);
  }
}
