import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Idle } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private router: Router, public http: HttpClient, 
    private idle: Idle, private keepalive: Keepalive,
      private toaster: ToastrService) {
   
  }

  ngOnInit() {

  }

}
