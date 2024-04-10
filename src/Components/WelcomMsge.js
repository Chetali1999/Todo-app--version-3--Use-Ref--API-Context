import { useContext } from "react";
import { TodoItemsContext } from "../Store/TodoItemsStore";

const WelcomeMsge = () => {

    const {todoItems} = useContext(TodoItemsContext);

    return todoItems.length === 0 && <p className="text-center">Enjoy Your Day </p>

}

export default WelcomeMsge;