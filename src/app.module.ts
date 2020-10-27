import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShortnerUrisModule } from './shortner-uris/shortner-uris.module';
import { typeOrmConfig } from './typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ShortnerUrisModule
  ]
})
export class AppModule { }
