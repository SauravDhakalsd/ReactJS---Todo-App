import React from 'react'
import TodoItem from './TodoItem';

function todos(props) {
    return (
        <div className="container">
            <h3 style={{color:"green",fontSize:"2em"}} className="text-center">Todo List</h3>
            {props.todos.length===0?"No Todos to display":
            props.todos.map((todo)=>{
                return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
            })}
        </div>
    )
}

export default todos
