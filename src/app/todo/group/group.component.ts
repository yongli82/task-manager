import { Component, OnInit } from '@angular/core';
import {GroupService} from './group.service';
import {Group} from './group.model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  providers: [GroupService]
})
export class GroupComponent implements OnInit {
  groups: Group[] = [];
  currentGroupId: number;

  constructor(private service: GroupService) { }

  ngOnInit() {
    this.groups = this.service.fetchGroups();
  }

  selectGroup(): void {
    this.currentGroupId;

  }
}
