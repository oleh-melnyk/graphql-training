export const paginate = ({ arr, pageNumber, pageSize }) => {
  const from = pageNumber * pageSize - pageSize;
  return {
    data: arr.slice(from, from + pageSize),
    info: {
      page: pageNumber,
      total: arr.length,
      pages: Math.ceil(arr.length / pageSize),
    },
  };
};
