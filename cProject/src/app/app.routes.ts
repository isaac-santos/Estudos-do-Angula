import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    //Rota padrão
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    //Rota de Login
    { path: 'login', component: LoginComponent }
];
