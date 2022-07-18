import  './components/global-style/global.css'
import ListBlock from "./components/listBlock";
import TodoHeader from "./components/todoHeader";
import {useState} from "react";
import MyModal from "./components/Modal/MyModal";
import List from "./components/List";
import MyButton from "./components/UI/MyButton/MyButton";
import AddForm from "./components/addForm";
function App() {
    const arrJSON = JSON.parse(localStorage.getItem('list'))
    const [lists, setList] = useState(arrJSON?arrJSON:[])
    const [modal, setModal] = useState(false)

    const createList = (newList)=> {
        setList([...lists, newList])
        changeModal()
        localStorage.setItem('list', JSON.stringify([...lists, newList]))
    }
    const changeModal = () => {
        setModal(!modal)
    }
    const removeListItem = (item) => {
        setList(lists.filter(el => el.id!==item))
        localStorage.setItem('list', JSON.stringify(lists.filter(el => el.id!==item)))
    }

  return (
    <div className='todoList'>
        <TodoHeader modal={modal} modalStatus={changeModal}/>
        <MyModal modalStatus={changeModal} modal={modal}>
            <AddForm create={createList}/>
        </MyModal>
       <List lists={lists} remove={removeListItem}/>
    </div>
  );
}

export default App;
