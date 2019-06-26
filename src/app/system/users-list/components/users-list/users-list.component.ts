import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { IUser } from '../../../../shared/interfaces';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  displayedColumns = ['first_name', 'last_name', 'email'];
  userList: any[] = [];
  pagesCount: number;
  pageSizeOptions: number[] = [2, 3, 4, 5];
  pageEvent: PageEvent;
  pageSize = 10;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.data.pipe(
      map(data => data.users)
    )
      .subscribe((users: IUser[]) => {
        this.userList = users;
      });

    this.activatedRoute.data.pipe(
      map(data => {
        console.log(data.paginationInfo);
        return data.paginationInfo;
      })
    )
      .subscribe(paginationInfo => {
        this.pagesCount = paginationInfo.total;
      });
  }

  pageChanged(event: PageEvent): void {
    const page: number = event.pageIndex + 1;
    this.router.navigate(['./'], { queryParams: { page } });
  }

  userSelected(user: IUser): void {
    this.router.navigate(['./user', user.id]);
  }
  setPageSizeOptions(setPageSizeOptionsInput: string) {

  }
}
