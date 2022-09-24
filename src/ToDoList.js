import React from 'react';
import Header from './Component/ToDoList/Header';
import List from './Component/ToDoList/List';

function ToDoList(){
    return(
        <div className='ToDoList'>
            <Header/>
            <List/>
        </div>
    )
}

export default ToDoList;