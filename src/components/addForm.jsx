import React from 'react';
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";

const AddForm = () => {
    return (
        <form style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
            <MyInput
                placeholder="Название заголовка"
            />
            <MyInput
                placeholder="Описание"
            />
            <MyButton
                value={"Создать задание!"}
            />
        </form>
    );
};

export default AddForm;