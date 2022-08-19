import styles from './Itens.module.scss';
import menu from 'data/menu.json';
import Item from './Item';
import { useState } from 'react';
import { useEffect } from 'react';

interface Props {
    search: string ;
    filter: number | null ;
    sort: string
}

const Itens = (props: Props) => {
    const [list, setList] = useState(menu);
    const {search, filter, sort} = props; 

    const testSearch = (title:string) => {
        const regex = new RegExp(search, 'i');
        return regex.test(title);
    };

    const testFilter = (id:number) => {
        if (filter !== null) return filter === id;
        return true;
    };

    const sorting = (newList: typeof menu) => {
        switch(sort) {
        case 'portion': return newList.sort((item1, item2) => item1.size > item2.size ? 1 : -1);
        case 'qt_people': return newList.sort((item1, item2) => item1.serving > item2.serving ? 1 : -1);
        case 'price': return newList.sort((item1, item2) => item1.price > item2.price ? 1 : -1);
        default: return newList;
        }
    };

    useEffect(()=> {
        const newList = menu.filter(item => testSearch(item.title) && testFilter(item.category.id));
        setList(sorting(newList));
    },[search, filter, sort]);

    return (
        <div className={styles.itens}>
            {list.map((item) => (
                <Item 
                    key={item.id}
                    {...item}
                />
            ))}
        </div>

    );
};

export default Itens;