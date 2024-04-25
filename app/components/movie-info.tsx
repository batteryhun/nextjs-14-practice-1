import { link } from "fs";
import { API_URL } from "../constants";
import styles from "../styles/movie-info.module.css";
import Actor_profile from "./actor_profile";
export async function getMovie(id: string) {
  const json = await (await fetch(`${API_URL}/${id}`)).json();
  return json;
}
export async function getCredit(id: string) {
  const json = await (await fetch(`${API_URL}/${id}/credits`)).json();
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  const credit = await getCredit(id);
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
      </div>
    </div>
  );
}
