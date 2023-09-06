import { City } from './city.enum';

export function getAuthorsByCity(city: City) {
  return [
    {
      id: '101',
      name: 'Smith',
      username: 'JhonSmith',
      email: 'jsmith@tests.com',
      address: 'CA SanMateo 570',
    },
  ];
}
