import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Posts from './components/Posts';
import Postform from './components/Postform';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Postform />
          <hr />
          <Posts />
        </header>
      </div>
    </Provider>
  );
}

export default App;
