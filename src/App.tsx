import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';
import {Page404, Root, About, Home, Login} from './components';

function App() {
  return (
      <div className="app">
          <Routes>
              <Route path="/" element={<Root />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/Login" element={<Login />} />
                  <Route path="/about" element={<About />} />
              </Route>
              <Route path="*" element={<Page404 />} />
          </Routes>
      </div>
  );
}

export default App;
