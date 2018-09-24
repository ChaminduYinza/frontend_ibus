import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service.service'
import { Router } from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    userList: any;
    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.userService.getUsers().subscribe((data) => {
            console.log(data)
            this.userList = data.data;
        })
    }

    editUser(user_id) {
        this.router.navigate(['Admin/editUser', user_id]);
    }

}
