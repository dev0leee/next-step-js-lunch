export const isRestaurantListExist = (list) => {
  const isExist = list?.length > 0;
  const EMPTY_TEXT = '음식점이 존재하지 않습니다.';

  return { isExist, EMPTY_TEXT };
};
