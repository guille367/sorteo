import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import Principal from './container/Principal';
import Sorteo from './container/Sorteo';
import { Configuracion } from './container/Configuracion';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { members } from './reducers/Members';
import { reducer as formReducer } from 'redux-form';


const store = createStore(combineReducers({
  members,
  form: formReducer
}));

store.subscribe((a) => {
  console.log(store.getState())
})

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="container content main">
        <Router>
          <div>
            <Route exact path="/" component={ Principal }/>
            <Route exact path="/sorteo" component={ Sorteo }/>
            <Route exact path="/config" component={ Configuracion }/>
          </div>
        </Router>
      </div>
    </Provider>
      
    );
  }
}

export default App;
