import menu from 'data/menu.json';
import styles from './Home.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import ourPoint from 'assets/our_point.png';
import { useNavigate } from 'react-router-dom';
import { Dish } from 'types/dish';

const Home = () => {

    let recommendedDishes = [...menu];
    recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0, 3);
    const navigate = useNavigate();

    function redirectToDetails(dish: Dish) {
        navigate(`/dish/${dish.id}`, { state: { dish }});
    }

    return (
        <section>
            <h3 className={stylesTheme.title}>
                Chef Recommendations
            </h3>
            <div className={styles.recommendations}>
                {recommendedDishes.map((item) => (
                    <div key={item.id} className={styles.recommendation}>
                        <div className={styles.recommendation__image}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button className={styles.recommendation__button} onClick={()=>redirectToDetails(item)}>
                            View more
                        </button>
                    </div>
                ))}
            </div>
            <h3 className={stylesTheme.title}>Our Point</h3>
            <div className={styles.ourPoint}>
                <img src={ourPoint} alt='Let Eat be House' />
                <div className={styles.ourPoint__address}>
                    221 Cabra Road <br /> <br /> Cabra, Dublin-7
                </div>
            </div>
        </section>

    );
};

export default Home;