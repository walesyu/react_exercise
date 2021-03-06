import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers'


const windowHeight = {
  height: '80vh'
};
let store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter basename="/react_exercise" style={windowHeight}>
        <Switch>
          <App/>
        </Switch>
      </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
