import { Pipe, PipeTransform } from '@angular/core';

interface IHotel {
  _id: string,
  index: number,
  name: string,
  address: string,
  phone: string,
  pictures: string[],
  weather: {
    water: number,
    air: number
  },
  follow: {
    following: number,
    followers: number
  },
  tags: string[]
}


@Pipe({
  name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform {

  transform(allHotels: Array<IHotel>, tag: string): Array<IHotel> {
    return allHotels.filter(hotel => !!~hotel.tags.indexOf(tag));
  }

}
