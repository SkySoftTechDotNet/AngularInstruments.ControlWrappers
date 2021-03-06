import { Directive, Input } from '@angular/core';

@Directive({
    selector: 'column'
})
export class ColumnComponent {
    @Input() title: string;
    @Input() property: string;

    getName(): string {
        return this.title;
    }

    getProperty(): string {
        return this.property;
    }
}
