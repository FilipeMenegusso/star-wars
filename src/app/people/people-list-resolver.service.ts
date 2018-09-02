import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'

import { StarWarsService } from '../shared/star-wars.service'

@Injectable()
export class PeopleListResolver implements Resolve<any> {
  constructor(private starWarsService:StarWarsService) {

  }

  resolve() {
    const currentPage = 1;
    return this.starWarsService.getPeople(currentPage, null);
  }
}