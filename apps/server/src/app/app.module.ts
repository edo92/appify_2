import { Module } from '@nestjs/common';
import { PrismaModule } from '@appify/prisma';
import { ConfigModule } from '@nestjs/config';
import config from '../config';

@Module({
  imports: [PrismaModule, ConfigModule.forRoot({ load: [config] })],
  providers: [],
})
export class AppModule {}
