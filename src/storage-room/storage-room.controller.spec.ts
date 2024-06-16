import { Test, TestingModule } from '@nestjs/testing';
import { StorageRoomController } from './storage-room.controller';
import { StorageRoomService } from './storage-room.service';

describe('StorageRoomController', () => {
  let controller: StorageRoomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StorageRoomController],
      providers: [StorageRoomService],
    }).compile();

    controller = module.get<StorageRoomController>(StorageRoomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
