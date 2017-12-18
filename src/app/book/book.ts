export interface IBook {
    id: number;
    title: string;
    author: string;
    year: number;
    pages: number;
    publisher: string;
    action?: string;

}

export class Book implements IBook {
    id: number;
    title: string;
    author: string;
    year: number;
    pages: number;
    publisher: string;
    action? =  'add';

    constructor() {
    }
}
