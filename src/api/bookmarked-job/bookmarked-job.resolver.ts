import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BookmarkedJobService } from './bookmarked-job.service';
import { BookmarkedJob } from './entities/bookmarked-job.entity';
import { CreateBookmarkedJobInput } from './dto/create-bookmarked-job.input';
import { UpdateBookmarkedJobInput } from './dto/update-bookmarked-job.input';

@Resolver(() => BookmarkedJob)
export class BookmarkedJobResolver {
  constructor(private readonly bookmarkedJobService: BookmarkedJobService) {}

  @Mutation(() => BookmarkedJob)
  createBookmarkedJob(@Args('createBookmarkedJobInput') createBookmarkedJobInput: CreateBookmarkedJobInput) {
    return this.bookmarkedJobService.create(createBookmarkedJobInput);
  }

  @Query(() => [BookmarkedJob], { name: 'bookmarkedJob' })
  findAll() {
    return this.bookmarkedJobService.findAll();
  }

  @Query(() => BookmarkedJob, { name: 'bookmarkedJob' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.bookmarkedJobService.findOne(id);
  }

  @Mutation(() => BookmarkedJob)
  updateBookmarkedJob(@Args('updateBookmarkedJobInput') updateBookmarkedJobInput: UpdateBookmarkedJobInput) {
    return this.bookmarkedJobService.update(updateBookmarkedJobInput.id, updateBookmarkedJobInput);
  }

  @Mutation(() => BookmarkedJob)
  removeBookmarkedJob(@Args('id', { type: () => Int }) id: number) {
    return this.bookmarkedJobService.remove(id);
  }
}
