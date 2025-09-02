import styles from './footer.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>
                <p>© 2025 Marvel Movies. Todos os direitos reservados.</p>
            </div>
            <div className={styles.logoContainer}>
                <Image 
                    src="/images/logo2.png" 
                    alt="Marvel Logo" 
                    width={100} 
                    height={100}
                />
            </div>
            <div className={styles.apiLink}>
                <Link href="https://developer.marvel.com/" target="_blank">
                    API Filmes
                </Link>
            </div>
        </footer>
    )
}