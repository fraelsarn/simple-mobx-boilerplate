import React, { Component } from 'react';
import { observer } from 'mobx-react';
import storee from './todo_store.js';

@observer
class TodoListItem extends Component {

  render() {
    console.log("imported", storee)
    const store = storee;
    const todos = store.todos.toJS();
    window.store = storee;
    console.log("TodoListItem", todos)

    const list = todos.map((task, i) => {
        return (
          <li className="list-group-item" key={i}>
            <div className="row">
              <span className="col-xs-2"><input type="checkbox" /></span>
              <span className="col-xs-4">{task['task']+" "+i}</span>
              <span className="col-xs-4"><a onClick={store.removeTodo} data-idx={i} href="#">X</a></span>
            </div>
          </li>
        );
      }
    )
    return (
      <div>
        {list}
      </div>
    );
  };
};

export default TodoListItem;
