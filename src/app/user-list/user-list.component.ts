import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AddUserComponent } from '../add-user/add-user.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userService.getUsersSubject().subscribe((users) => {
      this.users = users;
    });
  }

  addUser() {
    this.router.navigate(['/add-user']);
  }

  openDialog() {
    const dialogRef: MatDialogRef<AddUserComponent> = this.dialog.open(
      AddUserComponent,
      {
        width: '400px',
      }
    );

    dialogRef.afterClosed().subscribe((user: any) => {
      if (user) {
        // Update the note with the new data

        this.userService.addUser(user);
      }
    });
  }
}
