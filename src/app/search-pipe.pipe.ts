import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
  pure: false
})
export class SearchPipePipe implements PipeTransform {
  
  transform(employees: any[], searchValue: string): any {
    return employees.filter(employee => employee.employeeName.indexOf(searchValue) !== -1 ) ;
  }

}
