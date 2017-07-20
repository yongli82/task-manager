import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {Task} from './task.model'
import {TaskService} from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TaskService]
})
export class TaskComponent implements OnInit, OnChanges {
  tasks: Task[] = [];
  @Input() groupId: number;
  taskTitle: string;

  @Output() taskNumber = new EventEmitter<number>();

  constructor(private service: TaskService) {
  }

  ngOnInit() {
    this.showTasksInGroup(this.groupId);
  }

  addTask(): void {
    const task = {
      id: null,
      title: this.taskTitle,
      groupId: this.groupId,
      status: 1
    }
    this.service.addTask(task);
    // 任务数变更
    this.taskNumber.emit(this.tasks.length)
  }

  showTasksInGroup(groupId: number): void {
    this.groupId = groupId;
    this.tasks = this.service.fetchTasks(this.groupId);
  }

  ngOnChanges() {
    this.showTasksInGroup(this.groupId);
  }

}
