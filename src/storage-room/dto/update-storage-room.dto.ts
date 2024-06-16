import { PartialType } from '@nestjs/mapped-types';
import { CreateStorageRoomDto } from './create-storage-room.dto';

export class UpdateStorageRoomDto extends PartialType(CreateStorageRoomDto) {}
