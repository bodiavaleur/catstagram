const axios = require('axios');

//key 9341df05-7f40-4cbd-9705-7af2cca054a9
// uid 987hx0

export const getBreedsList = (page, cb) =>
  axios
    .get('https://api.thecatapi.com/v1/breeds?limit=3&page=' + page)
    .then(res => cb(res.data));

export const getBreedsImg = (breedId, cb, limit) =>
  // FIXME: Can't change the size of image
  axios({
    method: 'get',
    url: `https://api.thecatapi.com/v1/images/search?limit=${limit}&size=small&breed_id=${breedId}`,
    headers: { 'x-api-key': '9341df05-7f40-4cbd-9705-7af2cca054a9' }
  }).then(res => cb(res.data));
