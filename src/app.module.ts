import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from './redis/redis.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [RedisModule],
})
export class AppModule {}
