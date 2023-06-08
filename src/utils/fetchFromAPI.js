

const axios = require('axios');

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  url: BASE_URL,
  params: {
    part: 'id,snippet',
    type: 'video',
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '365eb4d1acmshd84bf04c60250b5p1796c3jsn9f75262fdba3',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};