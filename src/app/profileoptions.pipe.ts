import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profileoptions'
})
export class ProfileoptionsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
