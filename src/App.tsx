import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';
import {Page404, Root, About, Home} from './components';

function App() {
  return (
      <div className="app">
          <Routes>
              <Route path="/" element={<Root />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
              </Route>
              <Route path="*" element={<Page404 />} />
          </Routes>
      </div>
  );
}

export default App;
