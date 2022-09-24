import React, { useState } from "react";
//state management
function Form(props) {
    const [toDo, setTodo] = useState({ name: '', completed: false });
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addToDoCallback(toDo);
        setTodo({ name: '', completed: false })
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={toDo.name} placeholder="Enter task" onChange={(e) => setTodo({ name: e.target.value, completed: false })} />
                <button>Add</button>
            </form>

        </div>

    );
}

export default Form;