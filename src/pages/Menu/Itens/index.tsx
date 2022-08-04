import styles from './Itens.module.scss';
import menu from './itens.json';
import Item from './Item';

const Itens = () => {
    return (
        <div className={styles.itens}>
            {menu.map((item) => (
                <Item 
                key={item.id}
                {...item}
                 />
            ))}
        </div>

    )
}

export default Itens