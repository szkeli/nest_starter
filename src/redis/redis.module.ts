import { Global, Module } from '@nestjs/common';
import { CacheModule, CacheStore } from '@nestjs/cache-manager';
import type { RedisClientOptions } from 'redis';
import { redisStore } from 'cache-manager-redis-store';
import { RedisService } from './redis.service';

@Global() // 全局模块
@Module({
  imports: [
    CacheModule.registerAsync<RedisClientOptions>({
      useFactory: async () => {
        const store = await redisStore({
          socket: {
            host: process.env.REDIS_HOST,
            port: Number(process.env.REDIS_PORT),
          },
          database: Number(process.env.REDIS_DB),
        });
        return {
          store: store as unknown as CacheStore,
        };
      },
    }),
  ],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
