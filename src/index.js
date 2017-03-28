import React, { Component } from 'react';
import { observable, computed} from 'mobx';
import { observer } from 'mobx-react';
import Devtools from 'mobx-react-devtools';
import ReactDOM from "react-dom"
import App from './components/app.js'

const appState = observable({
  count: 0
});
appState.increase = function() {
  console.log("inside func");
  console.log("this",this);
  this.count++;
}
appState.decrease = function() {
  console.log("inside func");
  console.log("this",this);
  this.count--;
}

ReactDOM.render(<App store={appState}/>, document.querySelector('.container'));
