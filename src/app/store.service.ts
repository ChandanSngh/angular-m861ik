import { Injectable } from '@angular/core';
const Users = {
  "1": {
    name: "users", id: "1",
    phoneNumber: "sfsd",
    email: "",
    gender: "",
    locations: {}
  }
};

@Injectable()
export class StoreService {
  userList = {};
  constructor() {
    if (Object.keys(Users).length > 0) {
      this.userList = Users;
    }
  }

  getUsers() {
    var keys = Object.keys(this.userList);
    return keys.map(key => this.userList[key]);
  }

  getUserById(id: string) {
    return this.userList[id] ? this.userList[id] : {};
  }

  deleteUserById(id: string) {
    return delete this.userList[id];
  }

  addUser(user: any) {
    var id = new Date().getTime();
    user[id] = id;
    this.userList[id] = user;
    return this.userList['id'];
  }

  editUser(user) {
    if (this.userList[user.id]) {
      this.userList[user.id] = user;
    }

    return this.userList['id'];
  }

}