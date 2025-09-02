import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.containerImage}>
                <Image className={styles.logo} src="/images/logo.png" width={65} height={100} alt="Logo" />
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/films">Filmes</Link></li>
                </ul>
            </nav>
        </header>
    )
}