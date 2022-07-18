import React from 'react';
import ListBlock from "./listBlock";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const List = ({lists, remove}) => {
    return (
        <div style={{height:'400px', overflowY: "scroll"}}>
            {lists.length<=0?<span style={{display:"block", marginTop:"15px" ,textAlign: 'center'}}>Все дела выполнены!</span>:''}
            <TransitionGroup>
                    {lists.map((list, index)=>
                        <CSSTransition
                            timeout={500}
                            classNames={'modalAnimation'}
                        >
                            <ListBlock
                                number={index+1}
                                remove={remove}
                                key={index}
                                list={list}
                            />
                        </CSSTransition>
                    )}
            </TransitionGroup>
        </div>
    );
};

export default List;