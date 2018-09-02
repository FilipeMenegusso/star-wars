import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';

import { appRoutes } from './routes';

import { StarWarsService } from './shared/star-wars.service';

import { StarWarsAppComponent } from './star-wars-app.component';
import { PeopleListComponent, PersonDetailsComponent, PeopleListResolver } from './people';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot()
  ],

  declarations: [
    StarWarsAppComponent,
    PeopleListComponent,
    PersonDetailsComponent,
    PaginationComponent,
    SpinnerComponent
  ],

  providers: [StarWarsService, PeopleListResolver],

  bootstrap: [StarWarsAppComponent],

  entryComponents: [PersonDetailsComponent, SpinnerComponent]
})
export class AppModule { }
