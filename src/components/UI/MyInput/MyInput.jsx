import React from 'react';
import styles from './MyInput.modal.css'

const MyInput = (props) => {
    return (
        <input {...props} type="text" style={{marginBottom:'15px'}} className={'MyInput'}/>
    );
};

export default MyInput;