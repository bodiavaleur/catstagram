import {
  LOAD_BREEDS_LIST,
  LOAD_BREEDS_IMAGES,
  SELECT_CAT,
  CLEAR_BREEDS_IMAGES
} from './actionTypes';

const initialState = {
  breedsData: [],
  breedsImages: [],
  selectedCatData: []
};

export default (state = initialState, { type, data }) => {
  switch (type) {
    case LOAD_BREEDS_LIST:
      return Object.assign({}, state, { breedsData: data });

    case LOAD_BREEDS_IMAGES:
      return Object.assign({}, state, {
        breedsImages: state.breedsImages.concat(data)
      });

    case CLEAR_BREEDS_IMAGES:
      return Object.assign({}, state, {
        breedsImages: []
      });

    case SELECT_CAT:
      return Object.assign({}, state, { selectedCatData: data });
    default:
      return state;
  }
};
