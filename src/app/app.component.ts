import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  currentGroupId: number;
  currentTaskNum: number;

  changeGroup(currentGroupId: number): void {
    this.currentGroupId = currentGroupId;
  }

  changeTaskNum(currentTaskNum: number): void {
    this.currentTaskNum = currentTaskNum;
  }
}
