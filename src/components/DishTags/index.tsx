import classNames from 'classnames';
import { Dish } from 'types/dish';
import styles from './DishTags.module.scss';


const DishTags = ( { category, size, serving, price }: Dish ) => {
    return (
        <div className={styles.tags}>
            <div className={classNames({
                [styles.tags__type]: true,
                [styles[`tags__type__${category.label.toLowerCase()}`]]: true
            })}>
                {category.label}
            </div>
            <div className={styles.tags__portion}>
                {size}g
            </div>
            <div className={styles.tags__qttpeople}>
                Serves {serving} {serving === 1 ? 'person' : 'people'}
            </div>
            <div className={styles.tags__price}>
                €$ {price.toFixed(2)}
            </div>
        </div>
    );
};

export default DishTags;