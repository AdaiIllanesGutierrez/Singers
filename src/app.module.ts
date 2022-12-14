import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SingersModule } from './singers/singers.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'singers',
      synchronize: true,
      autoLoadEntities: true,
    }),
    SingersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
