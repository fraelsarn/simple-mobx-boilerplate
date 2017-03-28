import React, { Component } from 'react';
import { observable, action} from 'mobx';

class TodoInput extends Component {

  constructor(props){
    super(props);
    this.state = { input: '' };
  }

  render() {
    return (
      <div>
        <form className="form-group" onSubmit={this.onFormSubmit}>
          <input type="text" value={this.state.input} onChange={this.onInputChange} />
          <button type="submit" className="btn btn-primary">Add</button>
        </form>
      </div>
    );
  };

  @action onInputChange = event => {
    this.setState( {input: event.target.value} );
  }

  @action onFormSubmit = event => {
    event.preventDefault();
    this.props.store.addTodo(this.state.input);
    this.setState( { input: ''});
  }
};

export default TodoInput;
