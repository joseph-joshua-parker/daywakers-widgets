import React from 'react';
import './App.scss';

import ConfigPanel from './components/ConfigPanel';
import { Stack } from 'react-bootstrap';


function App() {
  return (
    <Stack data-bs-theme="dark">
      <ConfigPanel />
    </Stack>
  );
}

export default App;
