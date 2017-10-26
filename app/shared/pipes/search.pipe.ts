import { Pipe, PipeTransform } from '@angular/core';

// This is to get the Search to work for the Plants and Groups

@Pipe ({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(value: Array<string>, filterBy: string): Array<string> {
      filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
      return filterBy ? value.filter((data: string) => data.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
   }
}
