import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";
export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          Explore the world.
          <br />
          Travel Diary captures your adventures.
        </h1>
        <h2>
          Track your journey with a world map that marks every city you've
          visited. Relive your amazing experiences and show your friends your
          global adventures.
        </h2>
        <Link to="/login" className="cta">
          Start traking now
        </Link>
      </section>
    </main>
  );
}
