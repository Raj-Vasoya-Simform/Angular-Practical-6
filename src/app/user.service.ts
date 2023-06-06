import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: any[] = [];
  private usersSubject: Subject<any[]> = new Subject<any[]>();

  constructor() {}

  getUsers(): any[] {
    return this.users;
  }

  getUsersSubject(): Subject<any[]> {
    return this.usersSubject;
  }

  addUser(user: any): void {
    const updatedUsers = [...this.users, user];
    this.users = updatedUsers;
    this.usersSubject.next(updatedUsers);
  }
}
