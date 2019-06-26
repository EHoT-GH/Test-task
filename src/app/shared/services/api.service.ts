import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {IUser} from '../interfaces';
import {HttpClient} from '@angular/common/http';
import {PaginationApiService} from './pagination-api.service';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient, private paginationApiService: PaginationApiService) {
  }

  fetchUsers(page): Observable<any> {
    return this.http.get<{data: any}>(`https://reqres.in/api/users?page=${page}`)
      .pipe(
        map(response => {
          return response.data;
        })
      );
  }


  fetchPaginationInfo(): Observable<any> {
    return this.paginationApiService.fetchPaginationInfo();
  }

  fetchUserById(id: number): Observable<IUser> {
    return this.http.get<IUser>(`https://reqres.in/api/users/${id}`)
      .pipe(
        map((response: any) => {
          const data: IUser = {
            id: response.data.id,
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            avatar: response.data.avatar,
            email: response.data.email,
          };
          return data;
        })
      );
  }

}
