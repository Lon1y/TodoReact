import React from 'react';
import styles from './MyButtom.module.css'

const MyButton = (props) => {
    return (
        <button {...props} className={styles.MyBtn}>
            {props.value}
        </button>
    );
};

export default MyButton;