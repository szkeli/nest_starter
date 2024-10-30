
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

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