import React, { useState } from 'react'



function Addtodo({todos,settodos}) {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const [err, seterr] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        if (!title.trim() || !desc.trim()) {
            seterr(true)
            console.log("clicked")
        }
        else{
            seterr(false)
            settodos([...todos,{title:title,desc:desc}])
        }
    }

    return (
        <div className='m-3'>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" value={title} className="form-label" >Todo Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => settitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Description</label>
                    <input type="text" value={desc} className="form-control" onChange={(e) => setdesc(e.target.value)} id="exampleInputPassword1" />
                </div>

                <button type="submit" onClick={submit} className="btn btn-danger">Add Todo</button>
            </form>
            {err && (
                <div className="alert alert-warning mt-3" role="alert">
                    Please fill in both fields!
                </div>
            )}
        </div>
    )
}

export default Addtodo
