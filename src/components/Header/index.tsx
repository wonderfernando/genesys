import styles from "./styles.module.css"
 
export default function Header() {
    return <>
        <header className={styles.header}>
            <a href="#"><h4> Login </h4></a>
            <nav className={styles.navBar}>
                <ul className={styles.menuNavBar}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Sair</a></li>
            </ul>
            </nav>
           
        </header>
    </>
}