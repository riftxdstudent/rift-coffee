import About from './components/about/About';
import Intro from './components/intro/Intro';
import 'animate.css';
import Market from './components/market/Market';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
     <Intro></Intro>
     <About></About>
     <Market></Market>
     <Contact></Contact>
    </div>
  );
}

export default App;
