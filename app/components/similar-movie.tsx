import styles from "../styles/similar-movie.module.css";

interface ISimilarProps {
  title: string;
  poster_path?: string;
}

export default function SimilarMovie({ title, poster_path }: ISimilarProps) {
  return (
    <li className={styles.container}>
      <img src={poster_path} />
      <h6>{title}</h6>
    </li>
  );
}
