import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <Services/>
     <Portfolio/>
     <Contact/>
     <Footer/>
    </div>
    
  );
}

export default App;
