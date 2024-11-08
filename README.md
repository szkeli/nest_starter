# Nest_Starter

## 描述

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## 项目初始化

```bash
pnpm install
```

## 编译运行

```bash
# development
# 生成prisma客户端
$ pnpm run prisma:migrate
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## 部署

### docker-compose

默认使用.env.production里面的配置。数据库等host地址需要改成对应容器名称

```bash
# 在项目根目录执行
docker-compose up -d
```

## 模块计划

### 常用web管理框架中间件/拦截器

- [ ] user 模块，鉴权/用户信息相关中间件
- [ ] 全局日志拦截器

### 基础设施功能

- [x] prisma
- [x] redis
- [ ] @nestjs/swagger的复杂类型
- [ ] package.json 脚本配置
- [ ] Dockerfile & docker-compose 配置

### 文档

- [ ] Readme
