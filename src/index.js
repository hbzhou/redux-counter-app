/*import {store} from './store';
import * as actions from './actions/counter-action';


const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
});

store.dispatch(actions.increment(2));
store.dispatch(actions.decrement(1));

unsubscribe();*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import {store} from "./store";


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));



