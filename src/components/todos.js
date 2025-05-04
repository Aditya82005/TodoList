import React from "react";
import Todoitem from "./todoitem";

function Todos(props) {
    return (
        <div className="m-4">
            <h3>"TO DO LIST"</h3>
            <div className="m-4">
                {
                    props.todos.map(todo => (
                       <Todoitem title={todo.title} desc={todo.desc} todos={props.todos} settodos={props.settodos}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Todos