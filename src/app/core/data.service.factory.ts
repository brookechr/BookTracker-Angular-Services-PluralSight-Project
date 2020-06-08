import { LoggerService } from "./logger.service";
import { DataService } from "./data.service";
import { HttpClient } from "@angular/common/http";

export function dataServiceFactory(logger: LoggerService, http: HttpClient) {
  let dataService: DataService = new DataService(logger, http); //calls DataService constructor, which takes in a LoggerService

  logger.log('Creating a new data service with a factory function');

  return dataService;
}
