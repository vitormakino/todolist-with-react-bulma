import React from 'react';
import TodoListItem from './TodoListItem';

export default class TodoList extends React.Component {
    render() {
        const data = this.props.data;
        const listItems = data.map((todo) => {
          return (
            <TodoListItem key={todo.id}
                          remove={this.props.removeTodo}
                          toggle={this.props.toggleTodo}
                          value={todo} />
          )
        });
        return listItems;
    }
}