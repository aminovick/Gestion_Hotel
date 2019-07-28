import React, { Fragment } from 'react';
import {Header,Footer} from './Layout'
import Contenu from './Contenu'

import './App.css';

function App() {
  return (
    <Fragment>
     <Header/>
     <Contenu/>
     <Footer/>
    </Fragment>
  );
}

export default App;
