import React from 'react';
import styles from './MyModal.module.css'


const MyModal = ({modal, modalStatus, children}) => {
    const mainClass = [styles.MyModal]
    if (modal){
        mainClass.push(styles.active)
    }
    return (
        <div className={mainClass.join(' ')} onClick={()=> modalStatus(!modal)}>
            <div className={styles.MyModalContent} onClick={(e)=> e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;