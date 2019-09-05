import React from 'react';
import Todo from './Todo'

const TodoList = (props) => {
        return (
            <div>
                {props.todoData.map( (todoItem) => <Todo key={todoItem.id} todoItem={todoItem} completeToggle={props.completeToggle} /> )}
            </div>
        )
    }

export default TodoList