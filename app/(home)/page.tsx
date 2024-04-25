import Movie from "../components/movie";
import { API_URL } from "../constants";
import styles from "../styles/home.module.css";

export const metadata = {
  title: "Home",
};
const getMovies = async () => {
  const json = await (await fetch(API_URL)).json();
  return json;
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
