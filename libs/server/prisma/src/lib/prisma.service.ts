import { Injectable } from '@nestjs/common';
import * as Prisma from '@prisma/client';

@Injectable()
export class PrismaService extends Prisma.PrismaClient {
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
