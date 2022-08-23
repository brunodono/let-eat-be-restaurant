import styles from './StandardPage.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import { Outlet } from 'react-router-dom';
import React from 'react';

const StandardPage = ( { children }: { children?: React.ReactNode } ) => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    Let the pasta be your path
                </div>
            </header>
            <div className={stylesTheme.container}>
                <Outlet />
                {children}
            </div>
        </>
    );
};

export default StandardPage;