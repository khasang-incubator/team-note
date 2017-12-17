import {Component, OnInit} from "@angular/core";
import {TaskService} from "./task.service";
import {ActivatedRoute, Params} from "@angular/router";
import {AuthService} from "../../auth/auth.service";


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {


  constructor(private taskService: TaskService,
              private route: ActivatedRoute,
              private authService:AuthService) {
  }

  executor: string;

  ngOnInit() {
    this.executor = this.route.snapshot.params['executor'];
    this.route.params.subscribe(
      (params: Params) => {
        this.executor = params['executor'];
        if (this.executor === 'me') {
          this.taskService.loadTasksFromDB();
        }
        if (this.executor === 'not_me') {
          this.taskService.setTasks('not_me');
        }
      }
    );
  }
}