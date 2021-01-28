import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  user: any;
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {
  }
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


  ngOnInit() {}
    register() {
        if (this.registerForm.valid) {
            var regUser = {
                "emailId": this.registerForm.value["email"],
                "fullName": this.registerForm.value["fullName"],
                "password": this.registerForm.value["pwd"]
            }
            // this.service.Register(regUser).subscribe(res => {
            //     if (res) {
            //         this.toastr.success('Registration successfull', 'Success!');
            //     } else {
            //         this.toastr.error('Registration failed.', 'Error!');
            //     }
            // });
        }
        else {
            this.toastr.error('Please fill all mandatory fields.', 'Error!');
        }
  }


}
