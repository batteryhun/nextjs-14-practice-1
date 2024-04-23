import { error } from "console";
import { API_URL } from "../(home)/page";
import styles from "../styles/movie-video.module.css";
async function getVideo(id: string) {
  const json = await (await fetch(`${API_URL}/${id}/videos`)).json();
  return json;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideo(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`http://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
}
