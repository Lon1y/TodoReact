import React from 'react';
import MyButton from "./UI/MyButton/MyButton";

const TodoHeader = (props) => {
    return (
        <div className='todolist__header'>
            <div>
                <MyButton
                    style={{marginRight:"15px"}}
                    onClick={()=>props.modalStatus(!props.modal)}
                    value={'add New'}
                />
                <MyButton
                    onClick={()=> props.removeall()}
                    value={"deleteALL"}
                />
            </div>

            <span>Todo<strong>List</strong> </span>
        </div>
    );
};

export default TodoHeader;