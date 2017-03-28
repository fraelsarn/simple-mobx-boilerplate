import React, { Component } from 'react';
import { observable, action, computed } from 'mobx';


class ObservableTodoStore {
	@observable todos = [];
  @observable pendingRequests = 0;

	@computed get completedTodosCount() {
    	return this.todos.filter(
			todo => todo.completed === true
		).length;
  }

	@computed get report() {
		if (this.todos.length === 0)
			return "<none>";
		return `Next todo: "${this.todos[0].task}". ` +
			`Progress: ${this.completedTodosCount}/${this.todos.length}`;
	}

	@action addTodo(task) {
    console.log("addTodo:", task)
		this.todos.push({
			task: task,
      id: Math.random(),
			completed: false,
			assignee: null
		});
	}

  @action removeTodoById = (e) => {
    const idd = e.target.getAttribute('data-idx');
    console.log("to be removed: ", id);
    const remove = this.todos.filter(todo => {
      console.log(todo.id)
      return todo.id != idx;
    });
    this.todos = remove;
  }

  @action removeTodo = (e) => {
    const idx = e.target.getAttribute('data-idx');
    console.log("idx", idx);
    console.log("arr", this.todos.toJS())
    this.todos.splice(idx, 1);
  }
}


const observableTodoStore = new ObservableTodoStore();

export default observableTodoStore;
