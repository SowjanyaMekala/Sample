import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../shared/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm = this.fb.group({
    fullName: ['', Validators.compose([Validators.required])],
    email: ['', [Validators.email, Validators.required]],
    pwd: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])
    ],
    cnfPwd: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private toastr: ToastrService, private service: AppService) {}

  ngOnInit() {}

    register() {
        if (this.registerForm.valid) {
            var regUser = {
                "emailId": this.registerForm.value["email"],
                "fullName": this.registerForm.value["fullName"],
                "password": this.registerForm.value["pwd"]
            }
            this.service.Register(regUser).subscribe(res => {
                if (res) {
                    this.toastr.success('Registration successfull', 'Success!');
                } else {
                    this.toastr.error('Registration failed.', 'Error!');
                }
            });
        }
        else {
            this.toastr.error('Please fill all mandatory fields.', 'Error!');
        }
  }
}
