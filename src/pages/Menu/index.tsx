
import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg'
import Search from './Search';
import { useState } from 'react';
import Filters from './Filters';
import Sort from './Sort';
import Itens from './Itens';

const Menu = () => {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<number | null>(null);
    const [sort, setSort] = useState('');

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
                <div className={styles.menu__filters}>
                    <Filters filter={filter} setFilter={setFilter} />
                    <Sort sort={sort} setSort={setSort} />
                </div>
                <Itens />
            </section>
        </main>
    )

}

export default Menu