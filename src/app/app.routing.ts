import { RouterModule, Route } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component'
const routes: Route[] = [{
  path: 'users',
  loadChildren: 'app/user/user.module#UserModule'
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'users'
}
]

export const routingModule = RouterModule.forRoot(routes);