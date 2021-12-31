import React from 'react'

function TodoItem({todo,onDelete}) {
    let hfour= {
        fontWeight:"bold",
        color:"green",
        fontFamily:"sans-serif",
        textAlign:"center"
    };

    let forp= {
        color:"green"
    };

    let anitem= {
        border:"2px solid green",
        borderRadius:"3px",
        padding:"20px",
        backgroundColor:"whitesmoke",
        width:"50%",
        justifyContent:"center",
        alignItems:"center",
        margin:"auto"
    };

    return (
        <>
        <div className="my-4" style={anitem}>
            <h4 style={hfour}>{todo.title}</h4>
            <p style={forp}>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo)}}>Delete</button>
        </div>
        </>
    )
}

export default TodoItem
