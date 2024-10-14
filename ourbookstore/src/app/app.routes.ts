import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'landingpage',
        title:'ourbookstore-landing',
        loadComponent: () => import('./layouts/landingpage/landingpage.component')
    },
    {
        path:'sign_in',
        title:'sign_in',
        loadComponent: () => import('./components/users/auth/user-login/user-login.component')
    },
    {
        path:'sign_up',
        title:'sign_up',
        loadComponent: () => import('./components/users/auth/user-sign-up/user-sign-up.component')
    },
     // Redirection
     {
        path:'',
        redirectTo:'landingpage',
        pathMatch:'full'
    }

];
