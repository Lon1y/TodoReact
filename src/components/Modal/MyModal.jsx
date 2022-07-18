import React from 'react';
import styles from './MyModal.module.css'

const MyModal = (visible) => {

    const mainClass = [styles.MyModal]
    if (visible){
        mainClass.push('active')
    }

    return (
        <div className={mainClass.join(' ')}>

        </div>
    );
};

export default MyModal;