import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StoreService } from './store.service';
import {routingModule } from './app.routing';
import { UserModule} from './user/user.module';

@NgModule({
  imports:      [ BrowserModule, routingModule, CommonModule, UserModule ],
  declarations: [ AppComponent  ],
  bootstrap:    [ AppComponent ],
  providers: [StoreService]
})
export class AppModule { }
