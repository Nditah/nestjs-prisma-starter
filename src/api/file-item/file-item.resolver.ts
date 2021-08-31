import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FileItemService } from './file-item.service';
import { FileItem } from './entities/file-item.entity';
import { CreateFileItemInput } from './dto/create-file-item.input';
import { UpdateFileItemInput } from './dto/update-file-item.input';

@Resolver(() => FileItem)
export class FileItemResolver {
  constructor(private readonly fileItemService: FileItemService) {}

  @Mutation(() => FileItem)
  createFileItem(@Args('createFileItemInput') createFileItemInput: CreateFileItemInput) {
    return this.fileItemService.create(createFileItemInput);
  }

  @Query(() => [FileItem], { name: 'fileItem' })
  findAll() {
    return this.fileItemService.findAll();
  }

  @Query(() => FileItem, { name: 'fileItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.fileItemService.findOne(id);
  }

  @Mutation(() => FileItem)
  updateFileItem(@Args('updateFileItemInput') updateFileItemInput: UpdateFileItemInput) {
    return this.fileItemService.update(updateFileItemInput.id, updateFileItemInput);
  }

  @Mutation(() => FileItem)
  removeFileItem(@Args('id', { type: () => Int }) id: number) {
    return this.fileItemService.remove(id);
  }
}
