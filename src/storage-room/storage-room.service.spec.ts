import { Test, TestingModule } from '@nestjs/testing';
import { StorageRoomService } from './storage-room.service';

describe('StorageRoomService', () => {
  let service: StorageRoomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StorageRoomService],
    }).compile();

    service = module.get<StorageRoomService>(StorageRoomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
