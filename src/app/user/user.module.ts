import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UserRoutingModule} from './user.routing';
import {UserComponent} from './user.component';
import {UserListComponent} from './../user-list/user-list.component';

@NgModule({
  imports: [
    CommonModule, UserRoutingModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [UserComponent, UserListComponent],
  exports : [UserComponent, UserListComponent]
})
export class UserModule { }