import React from 'react'
import { Footer } from './Partials/Footer'
import { Header } from './Partials/Header'

export const DefaultLayout = ({children}) => {
  return (
    <div className='default-layout'>
      <header className='header mb-2'>
        <Header/>
      </header>
      <main className='main'>
        {children}
      </main>
      <footer className='footer'>
        <Footer/>
      </footer>
    </div>
  );
};
