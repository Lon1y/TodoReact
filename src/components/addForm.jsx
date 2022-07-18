import React, {useState} from 'react';
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";

const AddForm = ({create}) => {
    const [list, setList] = useState({name:'', description: '',})
    const CreateList = (def) => {
        def.preventDefault()
        const newList = {
            ...list, id:Date.now()
        }
        create(newList)
        list.name=''
        list.description=''
    }

    return (
        <form style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
            <MyInput
                required
                placeholder="Название заголовка"
                value={list.name}
                onChange = {e=>setList({...list, name:e.target.value})}
            />
            <MyInput
                required
                placeholder="Описание"
                value={list.description}
                onChange = {e=>setList({...list, description:e.target.value})}
            />
            <MyButton
                value={"Создать задание!"}
                onClick={CreateList}
            />
        </form>
    );
};

export default AddForm;