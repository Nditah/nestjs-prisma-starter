import { Test, TestingModule } from '@nestjs/testing';
import { PictureResolver } from './picture.resolver';
import { PictureService } from './picture.service';

describe('PictureResolver', () => {
  let resolver: PictureResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PictureResolver, PictureService],
    }).compile();

    resolver = module.get<PictureResolver>(PictureResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
