import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/Home/About';
import MySkils from './Pages/Skils/MySkils';

function App() {
  return (
    <div className=" mx-auto max-w-screen-xl ">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <MySkils></MySkils>

    </div>
  );
}

export default App;
