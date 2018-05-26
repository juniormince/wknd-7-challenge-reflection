import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//reducer party
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


const FormSubmission = (state = [], action) => {
    if (action.type === 'ADD_FEELING') {
        //adding feeling info
        console.log('feeling', action.payload);
        return [...state, action.payload];
    }
    else if (action.type === 'ADD_UNDERSTANDING') {
        //adding understanding info
        console.log('understanding', action.payload);
        return [...state, action.payload];
    }
    else if (action.type === 'ADD_SUPPORT') {
        //adding support info
        console.log('support', action.payload);
        return [...state, action.payload];
    }
    else if (action.type === 'ADD_COMMENTS') {
        //adding comments info
        console.log('comments', action.payload);
        return [...state, action.payload];
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        FormSubmission,
    }),
    applyMiddleware(logger),
);


ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
