import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../shared/api.service';

@Component({
  selector: 'app-forgot-password-link-page',
    templateUrl: './forgot-password-link-page.component.html',
    styleUrls: ['./forgot-password-link-page.component.scss']
})
export class ForgotPasswordLinkComponent implements OnInit {

    fogotpasswordlinkForm = this.fb.group({
        email: ['', [Validators.email, Validators.required]]
    });
    constructor(private fb: FormBuilder, private toastr: ToastrService,  private service: AppService) { }

  ngOnInit() {
  }

  submit() {
      var email = this.fogotpasswordlinkForm.value["email"];
      this.service.forgotPasswordlink(email).subscribe(res => {
        if (res) {
          this.toastr.success('Link sent! Please check your email.', 'Success!');
        }
        else {
          this.toastr.error('Failed to generate the Link', 'Error!');
        }
      });
  }

}
