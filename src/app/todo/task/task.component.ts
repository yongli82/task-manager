import {Component, OnInit} from '@angular/core';
import {Task} from './task.model'
import {TaskService} from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TaskService]
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  groupId: number;
  taskTitle: string;

  constructor(private service: TaskService) {
  }

  ngOnInit() {
    this.showTasksInGroup(1);
  }

  addTask(): void {
    const task = {
      id: null,
      title: this.taskTitle,
      groupId: this.groupId,
      status: 1
    }
    this.service.addTask(task)
  }

  showTasksInGroup(groupId: number): void {
    this.groupId = groupId;
    this.tasks = this.service.fetchTasks(this.groupId);
  }

}
