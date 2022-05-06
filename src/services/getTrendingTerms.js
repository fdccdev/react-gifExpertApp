import {API_KEY, API_URL} from '../services/settings'

const apiResponseGif = apiResponse => {
    const {data = []} = apiResponse
    return data
}

export default function getTrendingTerms() {
  const url = `${API_URL}trending/searches?api_key=${API_KEY}`;

  return fetch(url)
    .then(res => res.json())
    .then(apiResponseGif)
};