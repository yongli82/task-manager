import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GroupComponent } from './todo/group/group.component';
import { TaskComponent } from './todo/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GroupComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
