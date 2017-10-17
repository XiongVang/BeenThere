import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app.component.jsx'
import rootReducer from './reducers/root.reducer.jsx';
// store
const store = createStore(rootReducer, {}, applyMiddleware());

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.querySelector('#root'));