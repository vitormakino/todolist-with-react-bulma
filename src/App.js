import React, { Component } from 'react';
import { Box, Button, Container, Hero, Panel } from 'reactbulma';

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
    const remainder = this.state.data.filter((todo) => todo.id !== id);
    // Update state with filter
    this.setState({data: remainder});
  }

  removeAll() {
    this.setState({data: []});
  }

  toggleTodo(id) {
    const todos = this.state.data.slice();
    
    todos.forEach((todo,index,arr) => {
      if(todo.id === id) {
        arr[index] = Object.assign({}, todo, {completed: !todo.completed});
      }          
    });

    this.setState({data: todos});    
  }

  render() {
    return (
      <Hero fullheight primary bold>
        <Hero.Body>
          <Container>
            <Box>
              <Panel>
                <Panel.Heading>
                  List of Todos
                </Panel.Heading>
                <TodoForm addTodo={this.addTodo.bind(this)}/>
                <TodoList removeTodo={this.removeTodo.bind(this)}
                          toggleTodo={this.toggleTodo.bind(this)}
                          data={this.state.data}/>
                <Panel.Block>
                  <Button link outlined fullwidth
                          onClick={() => this.removeAll()}>
                    Clear all
                  </Button>
                </Panel.Block>
              </Panel>
            </Box>
          </Container>
        </Hero.Body>
      </Hero>
    );
  }
}

export default App;
