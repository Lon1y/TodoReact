import React from 'react';
import MyButton from "./UI/MyButton/MyButton";

const ListBlock = (props) => {
    return (
        <div className="todoBlockList">
            <div className="blockList">
                <div className="blockContent">
                    <strong>{props.number} {props.list.name} </strong>
                    <div>
                        {props.list.description}
                    </div>
                </div>
                <div className='blockDltBtn'>
                    <MyButton
                        onClick={()=>props.remove(props.list.id)}
                        value={'Удалить'}
                    />
                </div>
            </div>
        </div>
    );
};

export default ListBlock;