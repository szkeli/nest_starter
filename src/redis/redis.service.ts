import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class RedisService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  /**
   * 获取缓存
   * @param key
   */
  async get<T>(key: string): Promise<T> {
    return await this.cacheManager.get(process.env.REDIS_PREFIX + ':' + key);
  }

  /**
   * 设置缓存
   * @param key
   * @param value
   * @param ttl 缓存时间 单位秒 不传为永久
   */
  async set(key: string, value: any, ttl?: number): Promise<void> {
    await this.cacheManager.set(
      process.env.REDIS_PREFIX + ':' + key,
      value,
      // @ts-ignore
      { ttl },
    );
  }

  /**
   * 删除缓存
   * @param key
   */
  async del(key: string): Promise<void> {
    return await this.cacheManager.del(process.env.REDIS_PREFIX + ':' + key);
  }
}
