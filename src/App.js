
import Navbar from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import About from './components/About/About';
function App() {
  return (
    <>
      <div className="app">
        <Navbar/>
        <Home/>
        <About/>
      </div>
    </>
  );
}

export default App;
