const axios = require('axios');
const { splitSpaceInPlusSign } = require('./formatter');

const URL_BREAKING_BAD_API = 'https://www.breakingbadapi.com/api';

const getCharacterByName = async (name) => {
  return await axios.get(`${URL_BREAKING_BAD_API}/characters?name=${splitSpaceInPlusSign(name)}`)
    .then((response) => {
      return response.data[0];
    })
    .catch((error) => {
      console.log(error);
    });
}

const getAllEpisodes = async () => {
  return axios.get(`${URL_BREAKING_BAD_API}/episodes`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log('Erro na requisição: ' + error);
    });
}

module.exports = {
  getCharacterByName,
  getAllEpisodes,
};