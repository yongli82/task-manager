import {Injectable} from '@angular/core';
import {Group} from './group.model'

@Injectable()
export class GroupService {

  groups: Group[] = []

  constructor() {
    let group = {
      id: 1,
      name: 'Group one'
    };
    this.groups.push(group)
    group = {
      id: 2,
      name: 'Group two'
    }
    this.groups.push(group)
    group = {
      id: 3,
      name: 'Group three'
    }
    this.groups.push(group)
  }

  fetchGroups(): Group[] {
    return this.groups;
  }

}
