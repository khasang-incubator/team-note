import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {RouterModule, Routes} from "@angular/router";
import {TasksComponent} from "./tasks/tasks.component";
import { UsersComponent } from './users/users.component';
import {TaskService} from "./task.service";

const routes: Routes = [
  {path: "tasks/:id", component: TasksComponent},
  {path: "users", component: UsersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    UsersComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
