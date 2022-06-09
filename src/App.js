import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/Home/About';

function App() {
  return (
    <div className=" bg-slate-500 mx-auto max-w-screen-xl ">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
    </div>
  );
}

export default App;
