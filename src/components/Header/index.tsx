import format from 'date-fns/format'
import enGB from 'date-fns/locale/en-GB'

import styles from './styles.module.scss'

export function Header() {

    const currentDate = format(new Date(), 'EEEEEEE, d MMMM', {
        locale: enGB
    });

    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr"/>
            <p>The best to listen, always</p>
            <span>{currentDate}</span>
        </header>
    );
}