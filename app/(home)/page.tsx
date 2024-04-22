import { link } from "fs";
import { Metadata } from "next";
import Link from "next/link";
export const metadata = {
  title: "Home",
};
export const API_URL = "http://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  const json = await (await fetch(API_URL)).json();
  return json;
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
