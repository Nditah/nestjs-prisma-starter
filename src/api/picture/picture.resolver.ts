import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PictureService } from './picture.service';
import { Picture } from './entities/picture.entity';
import { CreatePictureInput } from './dto/create-picture.input';
import { UpdatePictureInput } from './dto/update-picture.input';

@Resolver(() => Picture)
export class PictureResolver {
  constructor(private readonly pictureService: PictureService) {}

  @Mutation(() => Picture)
  createPicture(@Args('data') data: CreatePictureInput) {
    return this.pictureService.create(data);
  }

  @Query(() => [Picture], { name: 'picture' })
  findAll() {
    return this.pictureService.findAll();
  }

  @Query(() => Picture, { name: 'picture' })
  findOne(@Args('id', { type: () => String }) id: number) {
    return this.pictureService.findOne(id);
  }

  @Mutation(() => Picture)
  updatePicture(@Args('data') data: UpdatePictureInput) {
    return this.pictureService.update(data.id, data);
  }

  @Mutation(() => Picture)
  removePicture(@Args('id', { type: () => String }) id: number) {
    return this.pictureService.remove(id);
  }
}
