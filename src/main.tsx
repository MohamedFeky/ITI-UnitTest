import React from 'react';
import ReactDOM from 'react-dom/client';
import Posts from './components/Posts';
import ShippingPrice from './components/ShippingPrice';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main>
      <h1>Testing Tasks</h1>
      <ShippingPrice />
      <Posts />
    </main>
  </React.StrictMode>,
);
