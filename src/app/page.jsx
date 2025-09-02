import styles from './page.module.css'
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
        <h1>Home</h1>
        <h1 className="font-rubik-regular">Home</h1>
        <h1 className="font-rubik-bold">Home</h1>

    </main>
  );
}
