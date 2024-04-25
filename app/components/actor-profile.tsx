import styles from "../styles/actor_profile.module.css";

interface IActorProps {
  name: string;
  profile_path: string;
}

export default function Actor_profile({ name, profile_path }: IActorProps) {
  return (
    <li className={styles.container}>
      <img src={profile_path} />
      <h5>{name}</h5>
    </li>
  );
}
