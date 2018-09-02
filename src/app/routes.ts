import { Routes } from '@angular/router';

import { PeopleListResolver } from './people/people-list-resolver.service';

import { PeopleListComponent } from './people/people-list.component';

export const appRoutes:Routes = [
    { path: 'star-wars', component: PeopleListComponent, resolve: {people: PeopleListResolver} },
    { path: '', redirectTo: '/star-wars',  pathMatch: 'full' }
]