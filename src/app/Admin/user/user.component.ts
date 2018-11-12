import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service.service'
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

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

    deleteUser(user_id, index) {

        Swal({
            title: 'Are you sure?',
            text: "It will permanently deleted !",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
            const query = {
                "user_id": user_id
            };


            this.userService.removeuser(query).subscribe((res) => {

                if (res.status) {
                    Swal("Sucess!", res.msg, "success");
                    this.userList.splice(index, 1);
                } else {
                    Swal("Error!", res.msg, "warning");

                }

            }, (err) => {
                Swal("Error!", err.msg, "warning");

            })
        }

        })


    }

}
