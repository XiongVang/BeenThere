import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './header.component.jsx';
const Trips = () => <h2>Trips</h2>;
const Entries = () => <h2>Entries</h2>;
const Entrie = () => <h2>Entrie</h2>;

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" component={ Trips } />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;