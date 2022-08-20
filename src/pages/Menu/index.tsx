import styles from './Menu.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import Search from './Search';
import { useState } from 'react';
import Filters from './Filters';
import Sort from './Sort';
import Itens from './Itens';

const Menu = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<number | null>(null);
    const [sort, setSort] = useState('');

    return (
        <section className={styles.menu}>
            <h3 className={stylesTheme.title}>Menu</h3>
            <Search search={search} setSearch={setSearch} />
            <div className={styles.menu__filters}>
                <Filters filter={filter} setFilter={setFilter} />
                <Sort sort={sort} setSort={setSort} />
            </div>
            <Itens search={search} filter={filter} sort={sort} />
        </section>
    );

};

export default Menu;