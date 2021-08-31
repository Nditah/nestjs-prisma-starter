import { Test, TestingModule } from '@nestjs/testing';
import { FileItemResolver } from './file-item.resolver';
import { FileItemService } from './file-item.service';

describe('FileItemResolver', () => {
  let resolver: FileItemResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileItemResolver, FileItemService],
    }).compile();

    resolver = module.get<FileItemResolver>(FileItemResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
