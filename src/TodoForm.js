import React from 'react';
import { Control, Input, Panel } from 'reactbulma';

export default class TodoForm extends React.Component {

    handleBlur(event) {
        if(event.target.value) {
            this.props.addTodo(event.target.value);
            event.target.focus();
            event.target.value = "";
        }
    }
    
    render() {
        return (
          <Panel.Block> 
            <Control>
              <Input placeholder="What needs to be done?" onBlur={this.handleBlur.bind(this)} />
            </Control>
          </Panel.Block>  
        );
    }
}