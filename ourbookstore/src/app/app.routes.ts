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
        path: 'dashboard',
        title: 'Dashboard',
        loadComponent: () => import('./layouts/dashboard/dashboard.component'),
      },
      {
        path: 'library',
        title: 'library',
        loadComponent: () => import('./components/shared/library/library.component'),
      },
      {
        path: 'read',
        title: 'Read',
        loadComponent: () => import('./components/shared/reads/reads.component'),
      },
      {
        path: 'notification',
        title: 'Notification',
        loadComponent: () => import('./components/shared/notifications/notifications.component'),
      },
      {
        path: 'message',
        title: 'Message',
        loadComponent: () => import('./components/shared/messages/messages.component'),
      },
      {
        path: 'my-account',
        title: 'My account',
        loadComponent: () => import('./components/shared/my-account/my-account.component'),
      },
      {
        path: '',
        redirectTo: 'dashboard',
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
