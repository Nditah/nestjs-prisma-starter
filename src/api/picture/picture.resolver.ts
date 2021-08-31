import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PictureService } from './picture.service';
import { Picture } from './entities/picture.entity';
import { CreatePictureInput } from './dto/create-picture.input';
import { UpdatePictureInput } from './dto/update-picture.input';

@Resolver(() => Picture)
export class PictureResolver {
  constructor(private readonly pictureService: PictureService) {}

  @Mutation(() => Picture)
  createPicture(@Args('createPictureInput') createPictureInput: CreatePictureInput) {
    return this.pictureService.create(createPictureInput);
  }

  @Query(() => [Picture], { name: 'picture' })
  findAll() {
    return this.pictureService.findAll();
  }

  @Query(() => Picture, { name: 'picture' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pictureService.findOne(id);
  }

  @Mutation(() => Picture)
  updatePicture(@Args('updatePictureInput') updatePictureInput: UpdatePictureInput) {
    return this.pictureService.update(updatePictureInput.id, updatePictureInput);
  }

  @Mutation(() => Picture)
  removePicture(@Args('id', { type: () => Int }) id: number) {
    return this.pictureService.remove(id);
  }
}
