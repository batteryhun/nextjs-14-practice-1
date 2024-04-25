import { link } from "fs";
import { API_URL } from "../constants";
import styles from "../styles/movie-info.module.css";
import Actor_profile from "./actor-profile";
import SimilarMovie from "./similar-movie";
export async function getMovie(id: string) {
  const json = await (await fetch(`${API_URL}/${id}`)).json();
  return json;
}
async function getCredit(id: string) {
  const json = await (await fetch(`${API_URL}/${id}/credits`)).json();
  return json;
}

async function getSimilar(id: string) {
  const json = await (await fetch(`${API_URL}/${id}/similar`)).json();
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  const credit = await getCredit(id);
  const similarMovie = await getSimilar(id);
  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h2 className={styles.title}>{movie.title}</h2>
        <h3>★{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
        <ul className={styles.credit}>
          {credit.slice(0, 4).map((credit) => (
            <Actor_profile
              name={credit.name}
              profile_path={credit.profile_path}
            ></Actor_profile>
          ))}
        </ul>
        <h1>If you like {movie.title} you may like this..</h1>
        <ul className={styles.similar}>
          {similarMovie.slice(0, 4).map((similarMovie) => (
            <SimilarMovie
              title={similarMovie.title}
              poster_path={similarMovie.poster_path}
            ></SimilarMovie>
          ))}
        </ul>
      </div>
    </div>
  );
}
