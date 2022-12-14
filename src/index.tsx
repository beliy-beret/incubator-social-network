import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import './index.css';
import 'antd/dist/antd.min.css';
import {store} from "./redux/_store";

export function rerenderTree() {
  return (
    ReactDOM.render(
      <BrowserRouter>
        <App store={store}/>
      </BrowserRouter>
      ,
      document.getElementById('root')
    )
  )
}

rerenderTree();

store.subscribe(rerenderTree);
