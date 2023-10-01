import React from 'react';
import Main from './components/pages/Main';
import Stat from './components/pages/Stat'
import { useState } from 'react';
import Head from './components/views/global/Head';
import Foot from './components/views/global/Foot';
function App() {

  const [showPage, setShowPage] = useState('main')
  return (
    <React.Fragment>
      <Head action={setShowPage}/>
      {
        showPage === 'main' ? <Main></Main> : <Stat></Stat>
      }
      <Foot/>
    </React.Fragment>
  );
}

export default App;
