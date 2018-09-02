import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { fromEvent, Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

import { BsModalService } from 'ngx-bootstrap/modal';

import { StarWarsService } from '../shared/star-wars.service';

import { IPerson } from '../shared/person.model';
import { Pagination } from '../shared/pagination/pagination.model';

import { PersonDetailsComponent } from './person-details.component';
import { SpinnerComponent } from '../shared/spinner/spinner.component';

@Component({
    selector: 'people-list',
    templateUrl: './people-list.component.html'
})
export class PeopleListComponent {
    people: IPerson[];
    peoplePagination: Pagination;
    search: string;
    constructor(private route: ActivatedRoute, private modalService: BsModalService, private starWarsService: StarWarsService) { }

    ngOnInit() {
        this.people = this.route.snapshot.data.people.results;

        const currentPage = 1;
        this.peoplePagination = new Pagination(currentPage, this.route.snapshot.data.people.count);

        const searchBox = document.getElementById('search');

        var input$ = fromEvent(searchBox, 'keyup').pipe(
            map((e: KeyboardEvent) => e.target),
            debounceTime(500)
        );

        input$.subscribe(x => this.searchPeople());
    }

    showPersonDetails(person: IPerson) {
        const initialState = {
            person: person
        };

        this.modalService.show(PersonDetailsComponent, { initialState });
    }

    updateCurrentPage(currentPage: number) {
        const spinner = this.modalService.show(SpinnerComponent, Object.assign({}, { class: 'modal-content-custom' }));

        this.peoplePagination.currentPage = currentPage;

        this.starWarsService.getPeople(this.peoplePagination.currentPage, null)
            .subscribe(response => {
                this.people = response.results;
                spinner.hide();
            });
    }

    searchPeople() {
        const spinner = this.modalService.show(SpinnerComponent, Object.assign({}, { class: 'modal-content-custom' }));

        this.starWarsService.getPeople(this.peoplePagination.currentPage, this.search)
            .subscribe(response => {
                this.people = response.results;
                spinner.hide();
            });
    }
}

