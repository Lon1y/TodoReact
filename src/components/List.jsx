import React from 'react';
import ListBlock from "./listBlock";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const List = ({lists, remove}) => {
    return (
        <div style={{height:'400px', overflowY: "scroll"}}>
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