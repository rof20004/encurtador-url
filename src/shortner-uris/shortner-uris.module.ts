import { Module } from '@nestjs/common';
import { ShortnerUrisService } from './shortner-uris.service';
import { ShortnerUrisController } from './shortner-uris.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShortnerUrisRepository } from './shortner-uris.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ShortnerUrisRepository])
  ],
  providers: [ShortnerUrisService],
  controllers: [ShortnerUrisController]
})
export class ShortnerUrisModule { }
