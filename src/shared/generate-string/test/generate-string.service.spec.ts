import { Test, TestingModule } from '@nestjs/testing';
import { GenerateStringService } from '../generate-string.service';

describe('GenerateStringService', () => {
  let service: GenerateStringService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateStringService],
    }).compile();

    service = module.get<GenerateStringService>(GenerateStringService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
