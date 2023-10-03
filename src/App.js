import React from 'react';
import Main from './components/pages/Main';
import Stat from './components/pages/Stat'
import { useState } from 'react';
import Head from './components/views/global/Head';
import Foot from './components/views/global/Foot';
function App() {

  const [showPage, setShowPage] = useState('main')
  const [data, setData] = useState(["2000::Income::Salary",
                                    "200::Expense::Rent",
                                    "100::Expense::Clothes",
                                    "50::Expense::Car Maintance"])
  return (
    <React.Fragment>
      <Head action={setShowPage}/>
      {
        showPage === 'main' ? <Main action={setData}></Main> : <Stat statData={data}></Stat>
      }
      <Foot/>
    </React.Fragment>
  );
}

export default App;
