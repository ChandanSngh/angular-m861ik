import { RouterModule, Route } from '@angular/router';
import { UserComponent } from './user.component';
import { UserListComponent } from './../user-list/user-list.component'
const routes: Route[] = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'add',
    component: UserComponent
  },
  {
    path: 'edit/:id',
    component: UserComponent
  }
]

export const UserRoutingModule = RouterModule.forChild(routes);