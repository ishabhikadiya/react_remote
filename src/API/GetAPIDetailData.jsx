export const getMovieDetail = async({params})=>{
    const id=params.imdbid;
    try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${id}&apikey=6f8e0a8e&s`
        );
        const data = response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
  
}