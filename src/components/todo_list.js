import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import Devtools from 'mobx-react-devtools';
import TodoListItem from './todo_list_item.js';


@observer class TodoList extends Component {

  @observable count = 0;

  render() {

    console.log("store: ", this.props.store)
    console.log("todos:", this.props.store.todos)

    return (
      <div>
        <Devtools />
        Counter: {this.count}
        <br />
        <button className="btn btn-primary" onClick={this.handleDec}> - </button>
        <button className="btn btn-primary has-danger" onClick={this.handleInc}> + </button>
        <br /><br />
        <ul className="col-sm-4 list-group">
          <TodoListItem store={this.props.store}/>
        </ul>
      </div>
    );
  }

  @action handleDec = () => {
    console.log("decrease")
    this.count--;
  }
  @action handleInc = () => {
    console.log("increase")
    this.count++;
  }

}

export default TodoList;
