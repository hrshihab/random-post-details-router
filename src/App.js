import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FeedDetails from './components/FeedDetails/FeedDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/home" element= {<Home/>}></Route>
        <Route path="/" element= {<Home/>}></Route>
        <Route path="/posts/:postId" element={<FeedDetails/>}></Route>
      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
