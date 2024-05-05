import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from 'recoil';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//     <RecoilRoot>
//       <App />
//     </RecoilRoot>

// );

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById('root')
);