
import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg'
import Search from './Search';
import { useState } from 'react';

const Menu = () => {
    const [search, setSearch] = useState("")
    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    Let the pasta be your path
                </div>
            </header>
            <section className={styles.menu}>
                <h3 className={styles.menu__title}>Menu</h3>
                <Search search={search} setSearch={setSearch} />
            </section>
        </main>
    )

}

export default Menu