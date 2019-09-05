import React from 'react';
import './Todo.css';

class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const completed = this.props.todoItem.completed ? 'line-through' : 'todo-item'
        return (
            <div onClick={() => this.props.completeToggle(this.props.todoItem.id)} className={`${completed}`}>
                {this.props.todoItem.task}
            </div>
        )
    }
}

export default Todo