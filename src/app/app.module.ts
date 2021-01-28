import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { MomentModule } from 'angular2-moment';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  exports: [RouterModule
    ],
  declarations: [
    AppComponent,
    ForgotPasswordPageComponent,
   
    LandingPageComponent,
    
  
  ],
  imports: [
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    NgIdleKeepaliveModule.forRoot(),
    MomentModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true,
      progressAnimation: 'increasing'
    }),
    RouterModule.forRoot([
      {
        path: '',
        component: LandingPageComponent,
        children: [
          { path: '', component: LandingPageComponent, pathMatch: 'full' },
        ]
      },
      { path: 'forgetpassword', component: ForgotPasswordPageComponent },

    ],
     )
    
  ],
  providers: [
    DatePipe
    ],
  bootstrap: [AppComponent],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  
}

