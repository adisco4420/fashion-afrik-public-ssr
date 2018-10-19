import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'colorType'})
export class ColorTypePipe implements PipeTransform {
  transform(products: any[], colorTypes: string[]): any[] {
    if (!colorTypes || colorTypes.length === 0) return products;
    return products.filter(item => colorTypes.includes(item.colors['0'].slug));
  }
}

@Pipe({name: 'priceType'})
export class PriceTypePipe implements PipeTransform {
  transform(products: any[], priceTypes: string[]): any[] {
    if (!priceTypes || priceTypes.length === 0) {
        return products;
    } else {
        return products.filter(item => priceTypes.includes(item.sale_price));
    }
  }
}

// @Pipe({
//     name: 'range'
//   })
//   export class RangePipe implements PipeTransform {
//     transform(teamVal: any, teamFil?: any): any {
//           console.log('teamFil', teamFil);
//           return teamFil
//            ? teamVal.filter(person => person.team >= teamFil)
//            : teamVal;
//       }
//   }
// @Pipe({name: 'countColour'})
// export class CountColourPipe implements PipeTransform {
//   transform(products: any[], colour: string): number {
//     if (!products || products.length === 0) return 0;
//     return products.reduce((count, fabric) => fabric.colour === colour ? count + 1 : count, 0);
//   }
// }
