import React from 'react';
import { Checkbox, Content, Delete, Media, Panel } from 'reactbulma';
import ClassNames from 'classnames';

import './TodoListItem.css';

export default class TodoListItem extends React.Component {
   
    //Workaround
    //https://github.com/facebook/react/issues/3005
    handleCheckboxChange(event) {
      setTimeout(todo => this.props.toggle(todo.id), 0, this.props.value);
    }

    render() {
        let todo = this.props.value;
        return (
          <Panel.Block>
            <Media className="todo-item">
              <Media.Left>
                <Checkbox onChange={this.handleCheckboxChange.bind(this)}
                          checked={todo.completed} />
              </Media.Left>
              <Media.Content onClick={() => this.props.toggle(todo.id)}>
                <Content className={ClassNames({'todo-completed': todo.completed })}>
                  {todo.text}
                </Content>
              </Media.Content>
              <Media.Right>
                <Delete onClick={() => this.props.remove(todo.id)} />
              </Media.Right>
            </Media>
          </Panel.Block>
        );
    }
}