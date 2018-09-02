import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Pagination } from './pagination.model';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {
    @Input() pagination: Pagination;
    @Output() currentPage = new EventEmitter<number>();

    selectPage(page: number) {
        this.pagination.currentPage = page;
        this.currentPage.emit(page);
    }

    ngOnInit() { }
}