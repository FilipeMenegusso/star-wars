import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { IPerson } from '../shared/person.model';

@Component({
    selector: 'person-details',
    templateUrl: './person-details.component.html'
})
export class PersonDetailsComponent implements OnInit {
    person: IPerson;

    constructor(public modalRef: BsModalRef) { }

    ngOnInit() { }
}