import React from 'react';

export default class TodoListItem extends React.Component {

    render() {
        let todo = this.props.value;
        return (
            <label className="panel-block"
                   onClick={() => this.props.toggle(todo.id)}>
              <span className={todo.completed ? 'todo-completed':''}>{todo.text}</span>
              <a className="tag is-delete"
                 onClick={() => this.props.remove(todo.id)}>
                 X
              </a>
            </label>
        );
    }
}