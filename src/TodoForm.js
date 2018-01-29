import React from 'react';

export default class TodoForm extends React.Component {
    onBlur() {
        if(this.textInput.value) {
            this.props.addTodo(this.textInput.value);
            this.textInput.focus();
            this.textInput.value = "";
        }
    }
    
    render() {
        return (
          <div className="panel-block"> 
            <div className="control">
              <input className="input" type="text"
                     ref={(input) => { this.textInput = input; }} 
                     placeholder="What needs to be done?" onBlur={() => this.onBlur() } />
            </div>
          </div>  
        );
    }
}