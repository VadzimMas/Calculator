import styles from './logo.module.scss'
import logo from './logo.png'

function Logo(props) {
    return (
        <img
            className={styles.logo}
            src={logo}
            alt=''
        />
    )
}

export default Logo;