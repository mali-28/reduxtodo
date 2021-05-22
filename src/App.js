import React from 'react';
import Todo from './Todo';
import {Provider} from 'react-redux';
import store from './store';
const App = () =>{
    return<>
    <Provider store={store}>
      <Todo/>
      </Provider>
    </>

}

export default App;