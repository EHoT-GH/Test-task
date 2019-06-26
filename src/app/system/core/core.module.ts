import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from '../../shared/services/api.service';
import {PaginationApiService} from '../../shared/services/pagination-api.service';

const services: any[] = [
  ApiService,
  PaginationApiService
];

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    ...services
  ],
  exports: [
    HttpClientModule
  ]
})
export class CoreModule {
}
