import React from 'react';
import './App.css';
import { Entry } from './Page/Entry/Entry_page';
import '../../erp-frontend/src/Components/Login/Login';
import { DefaultLayout } from './Layout/DefaultLayout';

function App() {
  return (
   <div className='App'>
    {/* <Entry/> */}
    <DefaultLayout/>
   </div>
  );
}

export default App;
