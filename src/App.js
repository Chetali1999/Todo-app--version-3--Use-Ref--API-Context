import './App.css';
import AppName from './Components/AppName';
import AddTODO from './Components/AddTODO';
import TodoItems from './Components/TodoItems';
import { useState } from 'react'
import WelcomeMsge from './Components/WelcomMsge';
import { TodoItemsContext } from './Store/TodoItemsStore';

function App() {

  const initialTodoItems = [
    //   {
    //   name: 'Buy Milk',
    //   dueDate: '20-01-2024',
    // },
    // {
    //   name: 'Go To College',
    //   dueDate: '20-01-2024',
    // },
  ];

  const [todoItems, setToDoItems] = useState(initialTodoItems)

  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItem = [...todoItems,
    {
      name: itemName,
      dueDate: itemDueDate,
    }
    ]
    setToDoItems(newTodoItem);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) =>
      item.name !== todoItemName);
    setToDoItems(newTodoItem);
  }

  return (
    <>
      <TodoItemsContext.Provider value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem
      }}>
        <center className='todo-container'>
          <AppName />
          <div className='todo-items'>
            <AddTODO />
            <div className='container'>
              <WelcomeMsge />
            </div>
            <TodoItems />
          </div>
        </center>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;
