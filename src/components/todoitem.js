import React from "react";
function Todoitem(props) {
    
    //delete function
    const ondelete=()=>{
        props.settodos(props.todos.filter(present))
    }
    function present(todo){
        if(todo.title!==props.title){
            return todo
        }
    }
    return (
        <div className="container">

            <div className="row">

                <div className="col-md-12 col">
                    <div className="form-check form-switch ">
                        <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
                        <label className="form-check-label" for="switchCheckDefault"><h6 className="listfont">{props.title}</h6></label>
                        <div id="emailHelp" className="form-text">{props.desc}</div>
                    </div>
                    <div className="col-md-12 col text-end mb-2">
                        <button type="button"  onClick={ondelete} className="btn btn-danger">Delete</button>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Todoitem