import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss']
})
export class ForgotPasswordPageComponent implements OnInit {
  
  fogotpasswordlinkForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]]
});

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private toastr: ToastrService,
    private router: Router) {
  }

  ngOnInit() {
    
  }

  submit() {
    var email = this.fogotpasswordlinkForm.value["email"];
    // this.service.forgotPasswordlink(email).subscribe(res => {
    //   if (res) {
    //     this.toastr.success('Link sent! Please check your email.', 'Success!');
    //   }
    //   else {
    //     this.toastr.error('Failed to generate the Link', 'Error!');
    //   }
    // });
}
}

