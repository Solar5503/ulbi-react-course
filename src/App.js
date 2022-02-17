import React, { useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import './styles/App.css';

function App() {
  const [value, setValue] = useState('Текст в инпуте');

  return (
    <div className="App">
      {/* <ClassCounter />
      <Counter /> */}
      <div className="post">
        <div className="post__content">
          <strong>1. JavaScript</strong>
          <div>Javascript - язык программирования</div>
        </div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default App;
