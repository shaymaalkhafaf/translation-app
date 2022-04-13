import React from 'react';
import './App.css';

import Translator from './components/Translator';

function App() {
  return (
      <div className="App">
          <Translator initialText="salutations" />
      </div>
  );
}

export default App;