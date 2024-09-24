import React from 'react';
import {Nav} from './components/Nav'
import { Present } from './components/Present';
import { Brands } from './components/Brands';

function App () {
  return(
    <div>
      <Nav></Nav>
      <Present></Present>
      <Brands></Brands>
    </div>
  )
}

export default App;