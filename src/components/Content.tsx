import { Header } from './Header';
import { MovieCard } from './MovieCard';

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface GenreList {
  title: string;
  movies: MovieProps[]
}

export function Content( props:GenreList) {
  return (
    <div className="container">
    <main>
         <Header title={props.title}/>
         <div className="movies-list">
         {props.movies.map(movie => (
             <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
           ))}
         </div>
       </main>
     </div>
  );
}