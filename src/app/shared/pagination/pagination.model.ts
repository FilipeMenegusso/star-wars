export class Pagination {
    totalPages: number;
    pages: number[] = [];

    constructor(public currentPage: number, totalRecords: number) {
        this.totalPages = Math.ceil(totalRecords/10);

        for (let page = 1; page <= this.totalPages; page++) {
            this.pages.push(page);
        }
    }
}