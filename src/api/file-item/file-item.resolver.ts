import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FileItemService } from './file-item.service';
import { FileItem } from './entities/file-item.entity';
import { CreateFileItemInput } from './dto/create-file-item.input';
import { UpdateFileItemInput } from './dto/update-file-item.input';

@Resolver(() => FileItem)
export class FileItemResolver {
  constructor(private readonly fileItemService: FileItemService) {}

  @Mutation(() => FileItem)
  createFileItem(@Args('data') data: CreateFileItemInput) {
    return this.fileItemService.create(data);
  }

  @Query(() => [FileItem], { name: 'fileItem' })
  findAll() {
    return this.fileItemService.findAll();
  }

  @Query(() => FileItem, { name: 'fileItem' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.fileItemService.findOne(id);
  }

  @Mutation(() => FileItem)
  updateFileItem(@Args('data') data: UpdateFileItemInput) {
    return this.fileItemService.update(data.id, data);
  }

  @Mutation(() => FileItem)
  removeFileItem(@Args('id', { type: () => String }) id: string) {
    return this.fileItemService.remove(id);
  }
}
