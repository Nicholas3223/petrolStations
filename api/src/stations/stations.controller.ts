import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { Station } from './models/station.model';
import { StationsService } from './stations.service';

@Controller('/api/stations')
export class StationsController {
  constructor(private readonly stationsService: StationsService) {}

  @Get()
  getStations(): Station[] {
    return this.stationsService.findAll();
  }

  @Get(':id')
  getStation(@Param('id', ParseIntPipe) id: number): Station {
    const station = this.stationsService.findOneById(id);
    if (!station) {
      throw new NotFoundException(id);
    }
    return station;
  }
}
