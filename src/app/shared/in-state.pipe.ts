import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inState'
})
export class InStatePipe implements PipeTransform {

  transform(cardList : any, cardState: string): any[] {
    if (cardList) {

        if (cardState === 'all')
          return cardList;

        return cardList.filter((card: any) => card.state === cardState);
    }
  }

}
