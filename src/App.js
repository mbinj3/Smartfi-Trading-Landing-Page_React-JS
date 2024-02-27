import './App.css';
import WebBg from './images/BG.png'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Earn from './components/Earn';
import Trade from './components/Trade';
import About from './components/About';
import Token from './components/Token';
import Swap from './components/Swap';
import Smart from './components/Smart';
import Community from './components/Community';
import Footer from './components/Footer';


function App() {
  // style={{backgroundImage:`url(${WebBg})`}}
  return (
    <div className='App w-full h-auto flex flex-col items-center bg-repeat overflow-hidden'>
      <Navbar />
      <Home />
      <Earn />
      <Trade />
      <About />
      <Token />
      <Swap />
      <Smart />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
