import {
  LOAD_BREEDS_LIST,
  LOAD_BREEDS_IMAGES,
  SELECT_CAT,
  CLEAR_BREEDS_IMAGES
} from './actionTypes';

export const loadBreedsList = data => ({
  type: LOAD_BREEDS_LIST,
  data: data
});

export const loadBreedsImages = images => ({
  type: LOAD_BREEDS_IMAGES,
  data: images
});

export const selectCat = payload => ({
  type: SELECT_CAT,
  data: payload
});

export const clearBreedsImages = () => ({
  type: CLEAR_BREEDS_IMAGES
});
