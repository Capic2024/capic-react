import './App.css';

import { GlobalStyle } from './style/globalstyle';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Main from './main/main';
import Loading from './loading/loading';
import FaceMain from './facepick/facemain';

function App() {
  return (
    <>
      <Router>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/loading" element={<Loading/>}/>
          <Route path="/pick" element={<FaceMain/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
