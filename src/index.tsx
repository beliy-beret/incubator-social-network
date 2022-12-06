import React from 'react';
import './index.css';
import 'antd/dist/antd.min.css';
import {rerenderTree} from "./render";
import {_store} from "./redux/_store";

const state = _store.getState();

rerenderTree(state);
