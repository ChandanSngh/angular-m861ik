import { Component, OnInit } from '@angular/core';
import {StoreService} from '../store.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList;
  hasUsers = false;
  constructor(private storeService : StoreService) { }

  ngOnInit() {
      this.userList = this.storeService.getUsers();
      this.hasUsers = Object.keys(this.userList).length > 0;
  }

  handleDeleteClick(id){
      this.storeService.deleteUserById(id);
      this.userList = this.storeService.getUsers();
  }

}