import { Component } from '@angular/core';

@Component({
    selector: 'star-wars-app',
    template: `
        <router-outlet></router-outlet>
    `
})
export class StarWarsAppComponent { 
    constructor() { }
}