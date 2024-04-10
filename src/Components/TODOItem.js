import { useContext } from "react";
import { TodoItemsContext } from "../Store/TodoItemsStore";

const TODOItem = ({ todoName, todoDate }) => {

    const {deleteItem} = useContext(TodoItemsContext);

    return (
        <>
            <div className='container'>
                <div className='row kg-row'>
                    <div className='col-4'>
                        {todoName}
                    </div>
                    <div className='col-4'>
                        {todoDate}
                    </div>
                    <div className='col-4'>
                        <button type='button' className='btn btn-danger kg-button' onClick={() => deleteItem(todoName)}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default TODOItem;