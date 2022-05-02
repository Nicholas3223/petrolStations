import { Module } from '@nestjs/common';
import { StationsResolver } from './stations.resolver';
import { StationsService } from './stations.service';
import { StationsController } from './stations.controller';

@Module({
  providers: [StationsResolver, StationsService],
  controllers: [StationsController],
})
export class StationsModule {}
