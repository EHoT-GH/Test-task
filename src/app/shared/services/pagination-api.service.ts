import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class PaginationApiService {

  constructor(private http: HttpClient) {
  }

  fetchPaginationInfo(): Observable<any> {
    return this.http.get<any>('https://reqres.in/api/users?page=1')
      .pipe(
        map((response) => {
          return {
                  total_pages: response.total_pages,
                  per_page: response.per_page,
                  total: response.total,
                  page: response.page
                };
        })
      );
  }
}
