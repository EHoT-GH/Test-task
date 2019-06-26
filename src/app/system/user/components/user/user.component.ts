import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../../../shared/interfaces';
import {ApiService} from '../../../../shared/services/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: IUser;

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const userId: number = this.activatedRoute.snapshot.params['id'];
    this.apiService.fetchUserById(userId).subscribe((user: IUser) => {
      this.user = user;
      console.log(user);
    });
  }

  back(): void {
    this.router.navigate(['./users']);
  }
}
