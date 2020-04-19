import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(employeeName: string, gender: string): string {
    return gender.toLocaleLowerCase() === 'male' ? 'Mr. ' + employeeName : 'Miss. ' + employeeName;

  }

}
