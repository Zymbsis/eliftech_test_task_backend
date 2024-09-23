const parseSortOrder = (sortOrder) => {
  const isKnownOrder = ['acs', 'desc'].includes(sortOrder);
  return isKnownOrder ? sortOrder : 'asc';
};

const parseSortBy = (sortBy) => {
  const keysOfEvent = ['event_date', 'title', 'organizer'];
  const isKnownSortBy = keysOfEvent.includes(sortBy);
  return isKnownSortBy ? sortBy : 'event_date';
};

export const parseSortParams = (query) => {
  const { sortOrder, sortBy } = query;
  const parsedSortOrder = parseSortOrder(sortOrder);
  const parsedSortBy = parseSortBy(sortBy);
  return { sortOrder: parsedSortOrder, sortBy: parsedSortBy };
};
