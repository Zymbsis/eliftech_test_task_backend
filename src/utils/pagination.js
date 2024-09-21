export const parseNumber = (number, defaultValue) => {
  if (typeof number === 'string') {
    const parsedNumber = parseInt(number);

    return !Number.isNaN(parsedNumber) ? parsedNumber : defaultValue;
  } else {
    return defaultValue;
  }
};

export const parsePaginationParams = (query) => {
  const { page, perPage } = query;

  const parsedPage = parseNumber(page, 1);
  const parsedPerPage = parseNumber(perPage, 10);

  return {
    page: parsedPage,
    perPage: parsedPerPage,
  };
};

export const calculatePaginationData = (totalItems, page, perPage) => {
  const totalPages = Math.ceil(totalItems / perPage);
  const hasNextPage = page < totalPages;
  const hasPrevPage = page !== 1;
  return { totalItems, totalPages, page, perPage, hasNextPage, hasPrevPage };
};
