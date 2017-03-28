import React, { Component } from 'react';
import { observable, computed, action, transaction, useStrict} from 'mobx';
import { observer } from 'mobx-react';
import Devtools from 'mobx-react-devtools';

import TodoInput from './todo_input.js';
import TodoList from './todo_list.js';
import observableTodoStore from './todo_store.js';

useStrict(true);

@observer class App extends Component {

  render() {
    return (
      <div>
        <TodoInput store={observableTodoStore} />
        <TodoList store={observableTodoStore} />
      </div>
    );
  }

}

export default App;
