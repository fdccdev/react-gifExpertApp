import {API_KEY, API_URL} from '../services/settings'

export const getGifs = async (keyword) => {
  const url = `${API_URL}gifs/search?api_key=${API_KEY}&q=${encodeURI(
    keyword
  )}&limit=30`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  
  return gifs;
};
