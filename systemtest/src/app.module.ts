import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordLinkComponent } from './forgot-password-link/forgot-password-link.component';

@NgModule({
    exports: [RouterModule],
    declarations: [
        AppComponent,
        RegisterComponent,
        ForgotPasswordLinkComponent
    ],
    imports: [
        ToastrModule,
        RouterModule.forRoot([
            {
                path: 'app',
                component: RegisterComponent,
                children: [
                    { path: '', component: RegisterComponent, pathMatch: 'full' },
                ]
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordLinkComponent,
                children: [
                    { path: '', component: ForgotPasswordLinkComponent, pathMatch: 'full' }
                ]
            }
        ])
    ]
})

export class AppModule {
}

