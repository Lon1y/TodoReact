import React from 'react';
import ListBlock from "./listBlock";

const List = ({lists, remove}) => {
    return (
        <div style={{height:'400px', overflowY: "scroll"}}>
            {lists.map((list, index)=>
                <ListBlock
                    number={index+1}
                    remove={remove}
                    key={index}
                    list={list}
                />
            )}
        </div>
    );
};

export default List;