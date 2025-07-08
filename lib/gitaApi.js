// src/lib/gitaApi.js

const headers = {
  'x-rapidapi-host': 'bhagavad-gita3.p.rapidapi.com',
  'x-rapidapi-key': '7ba6842d81msh233ba7003ee23b2p125ae7jsnb60902771680',
};

export const fetchChapters = async () => {
  const res = await fetch('https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18', {
    method: 'GET',
    headers,
  });
  const data = await res.json();
  return data;
};

export const fetchVerses = async (chapterNumber, language = 'en') => {
  const res = await fetch(
    `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/verses/?language=${language}`,
    {
      method: 'GET',
      headers,
    }
  );
  const data = await res.json();
  return data;
};
