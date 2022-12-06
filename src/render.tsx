import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {StateType} from "./redux/_store";
import {addPost} from './redux/_store';

export function rerenderTree(state: StateType) {
  return (
    ReactDOM.render(
      <BrowserRouter>
        <App state={state} addPost={addPost}/>
      </BrowserRouter>
      ,
      document.getElementById('root')
    )
  )
}
