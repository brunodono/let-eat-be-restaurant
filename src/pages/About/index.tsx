import styles from './About.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import house from 'assets/about/house.png';
import pasta1 from 'assets/about/pasta1.png';
import pasta2 from 'assets/about/pasta2.png';

const images = [pasta1, pasta2];

const About = () => {
    return (
        <section>
            <h3 className={stylesTheme.title}>
                About
            </h3>
            <div className={styles.aboutUs}>
                <div className={styles.images__image}>
                    <img src={house} alt='Let eat Be' />
                </div>

                <div className={styles.aboutUs__text}>
                    <p>
                        Our Let Eat Be restaurant offer you, our dear customers, the best yummy and enlightened Home Italian Pasta of Dublin!  We value the tradicional ingredients of Italian cookery, fresh, and of excellent quality in order to your experience be even more memorable!
                    </p>
                    <p>
                        We also have a meat menu with several options according to what pleases you!
                    </p>
                    <p>
                        As sides to our italian pasta, Let Eat Be restaurant owns a special wine reservation, that perfectly matches with your dish, whether meat or pasta!
                    </p>
                </div>
            </div>

            <div className={styles.images}>
                {images.map((image, index) => (
                    <div key={index} className={styles.images__image}>
                        <img src={image} alt='pasta image' />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;