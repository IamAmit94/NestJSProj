import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UsersModule, CategoriesModule, OrdersModule, ProductsModule, ReviewsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
