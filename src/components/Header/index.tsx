import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Nav.module.scss';

const Nav = () => {
    const rotes = [{
        label:'Home',
        to:'/'
    },{
        label:'Menu',
        to:'/menu'
    },{
        label:'About',
        to:'/about'
    }];
    return (
        <nav className={styles.nav}>
            <Logo />
            <ul className={styles.nav__list}>
                {rotes.map((rote, index) => (
                    <li key={index} className={styles.nav__link}>
                        <a href={rote.to}>
                            {rote.label}
                        </a>

                    </li>
                ))}
            </ul>

        </nav>
    );
};

export default Nav;