/* eslint-disable react/no-render-return-value */
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';
import './index.css';
import 'antd/dist/antd.min.css';
import {store} from './redux/_store';
import {Provider} from 'react-redux';

export function rerenderTree() {
	return (		
		ReactDOM.render(
			<Provider store={store}>
				<BrowserRouter>
					<App/>
				</BrowserRouter>
			</Provider>
			,
			document.getElementById('root')
		)
	);
}

rerenderTree();

store.subscribe(rerenderTree);
