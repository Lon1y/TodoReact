import styles from './components/global-style/global.css'
import ListBlock from "./components/listBlock";
import TodoHeader from "./components/todoHeader";
import {useState} from "react";
import MyModal from "./components/Modal/MyModal";
import List from "./components/List";
import MyButton from "./components/UI/MyButton/MyButton";
import AddForm from "./components/addForm";

function App() {
    const [lists, setList] = useState([
        {id:1, name: 'JS', description: 'JS-suck'},
        {id:2, name: 'React', description: 'React-suck'},
        {id:3, name: 'Vue', description: 'Vue-suck'},
        {id:4, name: 'Angular', description: 'Angular-suck'},
        {id:5, name: 'rest', description: 'rest-suck'},
        {id:6, name: 'next', description: 'next-suck'},
    ])
    const [modal, setModal] = useState(false)

    const changeModal = (modalStatus) => {
        setModal(modalStatus)
    }
    const removeListItem = (item) => {
        setList(lists.filter(el => el.id!==item))
    }

  return (
    <div className='todoList'>
        <TodoHeader
            modal={modal}
            modalStatus={changeModal}
        />
        <MyModal
            modalStatus={changeModal}
            modal={modal}
        >
            <AddForm/>
        </MyModal>

       <List lists={lists} remove={removeListItem}/>
    </div>
  );
}

export default App;
