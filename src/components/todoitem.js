import React from "react";
function Todoitem(props) {
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
                        <button type="button" className="btn btn-danger">Delete</button>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Todoitem