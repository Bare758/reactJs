import React, { Component } from "react";
import Todo from "./Todo";
import propTypes from "prop-types";

class Todos extends Component {
  render() {
    console.log(this.props.todos);
    const todos = this.props.todos;
    return (
      <div>
        {todos.map((todoItem) => {
          return (
            <Todo
              key={todoItem.id}
              todoProp={todoItem}
              markCompleteProp2={this.props.markCompleteProp}
            />
          );
        })}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: propTypes.array.isRequired,
};
export default Todos;
