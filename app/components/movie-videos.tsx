import { error } from "console";
import { API_URL } from "../(home)/page";

async function getVideo(id: string) {
  const json = await (await fetch(`${API_URL}/${id}/videos`)).json();
  return json;
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideo(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
