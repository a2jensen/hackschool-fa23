import Link from 'next/link';
import styles from './navbar.module.css';

const NavBar = () => {
    return (
        <div id={styles.navbar}>
            <div className={styles.title}>
                {/*Link to the home page here!*/}
                <Link href="/"></Link>
            </div>

            {/* Link to other pages here */}
            <div className={styles.nav_buttons}>
                <Link href="/gameHistory">History</Link>
                <Link href="/gamePage">Play Game</Link>
            </div>

        </div>
    )
}

export default NavBar;