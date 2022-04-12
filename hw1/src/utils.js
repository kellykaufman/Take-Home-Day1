export const getMoviesByName = async (name) => {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${name}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

getMoviesByName("Avengers");

/////////////////////////////////////////////////

export const getMovieDetailsById = async (id) => {
  const url = `https://www.omdbapi.com/?apikey${API_KEY}&i=${id}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};

getMovieDetailsById(1);
