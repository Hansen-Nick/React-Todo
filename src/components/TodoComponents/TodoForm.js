import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {todoName: ''}
    }

    handleChanges = ev => {
        this.setState({todoName: ev.target.value})
    }

    handleSubmit = ev => {
        console.log('I was submitted!')
        this.props.handleAddButton(ev, this.state.todoName);
        this.setState({ todoName: ""})
    }
    render() {

        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} value={this.state.todoName} type='text' name='todo_item' placeholder='To-do Item' />
                <button type='submit'>Add To-do Item</button>
                <button onClick={this.props.clearCompleted}>Clear Completed Items</button>
            </form>
        )
    }
}

export default TodoForm