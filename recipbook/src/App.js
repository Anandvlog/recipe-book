import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './common/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home';
function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />  
        </Routes>
    </div>
  );
}

export default App;
