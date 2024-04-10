import { useContext } from "react";
import TODOItem from "./TODOItem";
import { TodoItemsContext } from "../Store/TodoItemsStore";

const TodoItems = () => {

    const {todoItems} = useContext(TodoItemsContext);

    return (
        <div>
            {
                todoItems.map((item) => (
                    <TODOItem
                        key={item.name}
                        todoName={item.name}
                        todoDate={item.dueDate}
                    ></TODOItem>
                ))
            }
        </div>
    )
}

export default TodoItems;