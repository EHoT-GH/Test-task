import { Component, Input, OnInit, Optional } from '@angular/core';
import { IUser } from '../../../../shared/interfaces';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  userLoaded = false;
  @Input() user: IUser;

  constructor(@Optional() private parent: UserComponent) { }

  ngOnInit() {
    // console.log(this.parent);
    // this.parent.user = { ...this.user };
    this.userLoaded = true;
  }

}
