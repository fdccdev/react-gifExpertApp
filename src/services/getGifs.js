export const getGifs = async (keyword) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=COgfsZ5OC9sBEphWdcC33A1Br7HrpUC7&q=${encodeURI(
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
