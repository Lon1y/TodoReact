import React from 'react';
import MyButton from "./UI/MyButton/MyButton";

const TodoHeader = (props) => {
    return (
        <div className='todolist__header'>
            <MyButton
                onClick={()=>props.modalStatus(!props.modal)}
                value={'add New'}
            />
            <span>Todo<strong>List</strong> </span>
        </div>
    );
};

export default TodoHeader;