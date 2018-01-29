import React, { Component } from 'react';

import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends Component {
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: [],
      lastId: 0
    }
  }

  addTodo(val){
      let lastId = this.state.lastId;

      // Assemble data
      const todo = {text: val, id: lastId++, completed: false }
      // Update data
      this.state.data.push(todo);
      // Update state
      this.setState({data: this.state.data, lastId: lastId});
  }

  removeTodo(id) {
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    // Update state with filter
    this.setState({data: remainder});
  }

  removeAll() {
    this.setState({data: []});
  }

  toggleTodo(id) {
    this.state.data
        .filter(t => t.id === id)
        .forEach(todo => {
          todo.completed = !todo.completed;
        });
  }

  render() {
    return (
      <section className="hero is-fullheight is-primary is-bold">

      <div className="hero-body">
        <div className="container">
          <div className="box">
            <nav className="panel">
              <p className="panel-heading">
                List of Todos
              </p>
              <TodoForm addTodo={this.addTodo.bind(this)}/>
              <TodoList removeTodo={this.removeTodo.bind(this)}
                        toggleTodo={this.toggleTodo.bind(this)}
                        data={this.state.data}/>
              <div className="panel-block">
                <button className="button is-link is-outlined is-fullwidth"
                        onClick={() => this.removeAll()}>
                  Clear all
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
      </section>
    );
  }
}

export default App;
