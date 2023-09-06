import { City } from './city.enum';

export function getAuthorAddress(authorId: number) {
  return {
    street: 'Stryiska',
    suite: '22',
    city: City.LVIV,
    zipcode: '79000',
    phone: '111-111-111',
  };
}
