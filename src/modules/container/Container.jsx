import styles from './container.module.scss'
import Screen from '../screen/Screen.jsx';
import { Buttons } from '../buttons/Buttons.jsx';
import { useState } from "react";

function Container(props) {
    const [display, setDisplay] = useState('0');

    return (
        <div className={styles.container}>
            <Screen
                display={display}
            />
            <Buttons
                display={setDisplay}
            />
        </div>
    )
}

export default Container;