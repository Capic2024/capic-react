import './App.css';

import { GlobalStyle } from './style/globalstyle';
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Main from './main/main';
import Loading from './loading/loading';
import FaceMain from './facepick/facemain';
import Result from './result/result';
import MosicLoading from './loading/mosicloading';

function App() {
  return (
    <>
      <Router>
      <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/loading" element={<Loading/>}/>
          <Route path="/pick" element={<FaceMain/>}/>
          <Route path="/result" element={<Result/>}/>
          <Route path="/mosicloading" element={<MosicLoading/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
