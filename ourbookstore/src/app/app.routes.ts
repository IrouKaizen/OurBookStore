import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'landingpage',
    title: 'ourbookstore-landing',
    loadComponent: () => import('./layouts/landingpage/landingpage.component'),
  },
  {
    path: 'home',
    title: 'home',
    loadComponent: () => import('./layouts/home/home.component'),
    children: [
      {
        path: 'store',
        title: 'store',
        loadComponent: () => import('./components/shared/store/store.component'),
      },
      {
        path: 'my-books',
        title: 'My books',
        loadComponent: () => import('./components/users/my-books/my-books.component'),
      },
      {
        path: 'my-account',
        title: 'My account',
        loadComponent: () => import('./components/shared/my-account/my-account.component'),
      },
      {
        path: '',
        redirectTo: 'store',
        pathMatch: 'full',
      },
    ]
  },
  {
    path: 'sign-in',
    title: 'sign_in',
    loadComponent: () =>
      import('./components/users/auth/user-login/user-login.component'),
  },
  {
    path: 'sign-up',
    title: 'sign-up',
    loadComponent: () =>
      import('./components/users/auth/user-sign-up/user-sign-up.component'),
  },
  // Redirection
  {
    path: '',
    redirectTo: 'landingpage',
    pathMatch: 'full',
  },
  {
    path: '**',
    title: 'notfound',
    loadComponent: () => import('./layouts/notfound/notfound.component'),
  },
];
