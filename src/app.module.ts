import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MediaModule } from './media/media.module';
import { CategoriesModule } from './categories/categories.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UsersModule, MediaModule, CategoriesModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
