import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './components/user/user.component';
import {UserDataComponent} from './components/user-data/user-data.component';
import {MatButtonModule, MatCardModule, MatProgressSpinnerModule} from '@angular/material';

const materialComponents: any[] = [
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [UserComponent, UserDataComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ...materialComponents
  ]
})
export class UserModule {
}
