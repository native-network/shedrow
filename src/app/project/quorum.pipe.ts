import { Pipe, PipeTransform } from '@angular/core';
import { Tribe } from '../tribe/tribe';

@Pipe({
  name: 'quorum'
})
export class QuorumPipe implements PipeTransform {

  transform(tribe : Tribe): number {
    if (tribe) {
      return Math.ceil((tribe.members.length * tribe.configQuorum) / 100)
    }
  }

}
