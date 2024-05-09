import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'discussion/:discussionId', component: DiscussionComponent, canActivate: [DiscussionAuthGuard] },
    { path: 'unauthorized', component: UnauthorizedComponent },
    { path: '**', redirectTo: '/login' } // Redirect to login page for any other unknown routes
];




