import '../styles/tailwind.css';
import React from 'react';
import { AppProps } from 'next/app';
import NavBar from '../components/NavBar';

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-screen h-screen bg-gray-50">
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
