import {Injectable} from '@angular/core';
import {Task} from './task.model'


@Injectable()
export class TaskService {
  taskMap: Map<number, Task[]> = new Map();
  maxId: 30;

  constructor() {
    this.taskMap.set(1, [
        {id: 1, title: 'Hello task 1', status: 1, groupId: 1},
        {id: 2, title: 'Hello task 2', status: 1, groupId: 1},
        {id: 3, title: 'Hello task 3', status: 1, groupId: 1},
        {id: 4, title: 'Hello task 4', status: 1, groupId: 1},
        {id: 5, title: 'Hello task 5', status: 1, groupId: 1}
      ]
    );
    this.taskMap.set(2, [
        {id: 21, title: 'Hello task 21', status: 1, groupId: 2},
        {id: 22, title: 'Hello task 22', status: 1, groupId: 2},
        {id: 23, title: 'Hello task 23', status: 1, groupId: 2},
        {id: 24, title: 'Hello task 24', status: 1, groupId: 2},
        {id: 25, title: 'Hello task 25', status: 1, groupId: 2}
      ]
    );
  }

  fetchTasks(groupId: number): Task[] {
    return this.taskMap.get(groupId);
  }

  addTask(task: Task): Task[] {
    this.maxId++;
    const id = this.maxId;
    task.id = id;
    const tasks = this.taskMap.get(task.groupId);
    tasks.push(task);
    return tasks;
  }

  completeTask(task: Task): Task[] {
    const groupId = task.groupId;
    const taskId = task.id;
    const tasks = this.taskMap.get(groupId);
    for (const _task of tasks) {
      if (_task.id === taskId) {
        _task.status = 2;
        break;
      }
    }
    return tasks;
  }
}
