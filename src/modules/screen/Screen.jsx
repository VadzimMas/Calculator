import { useState, useContext, createContext, } from 'react';
import styles from './screen.module.scss';

function Screen(props) {
  return (
    <div className={styles.screen}>
      {props.display}
    </div>
  );
}

export default Screen;
