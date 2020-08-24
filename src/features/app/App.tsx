import React from 'react';

import Todos from '../todos/Todos';

const App = () => {
  return (
    <div className="app">
      <h1>Todo's in typescript</h1>
      <p>A todo's project based on typescript and react components</p>

      <h2>Here is an example todo</h2>
      <Todos todos={[{ id: 'a1s2d3-afq3qh-b3n849', text: 'Clean room', dateAdded: new Date(), done: false }]} />

      <ul>
        <li>a</li>
        <li>b</li>
      </ul>
    </div>
  )
}

export default App;
