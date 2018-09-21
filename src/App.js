import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import Header from './common/header/index';
import Home from './pages/home/index';

const App = (props) => {
    return (
        <Provider store={store}>
          <BrowserRouter>
            <div >
              <Header/>
              <Route path="/" exact component={Home}/>
            </div>
          </BrowserRouter>
        </Provider>
    );
}

export default App;
