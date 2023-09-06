import { getAuthorAddress, getAuthorsByCity } from '../../data';

const authors = (author, args, { dataSources }, info) => {
  return dataSources.authorsAPI.getAuthors();
};

const authorAddress = (author, args, { dataSources }, info) => {
  return getAuthorAddress(author.id);
};

const authorsByCity = (author, args, { dataSources }, info) => {
  return getAuthorsByCity(args.city);
};

export { authors, authorAddress, authorsByCity };
