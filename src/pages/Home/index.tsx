import menu from 'data/menu.json';
import styles from './Home.module.scss';

const Home = () => {

    let recommendedDishes = [...menu];
    recommendedDishes = recommendedDishes.sort(() => 0.5 - Math.random()).splice(0, 3);

    return (
        <section>
            <h3 className={styles.title}>
                Chef Recommendations
            </h3>
            <div className={styles.recommendations}>
                {recommendedDishes.map((item) => (
                    <div key={item.id} className={styles.recommendation}>
                        <div className={styles.recommendation__image}>
                            <img src={item.photo} alt={item.title} />
                        </div>
                        <button className={styles.recommendation__button}>
                            View more
                        </button>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Home;