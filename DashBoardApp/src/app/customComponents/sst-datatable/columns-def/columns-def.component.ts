import { Directive, QueryList, AfterViewInit, ContentChildren } from '@angular/core';
import { ColumnComponent } from './column/column.component';

@Directive({
  selector: 'columns-def',
})

export class ColumnsDefComponent implements AfterViewInit {
  @ContentChildren(ColumnComponent) public columnComponents: QueryList<ColumnComponent>;

  getColums() {
    let arr = new Array();
    this.columnComponents.toArray().forEach(el => {
      arr.push(el);
    });
    return arr; 
  }

  ngAfterViewInit() {
  }
  constructor() {
  }

}
