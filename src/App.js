
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
       <AllRoutes /> 
       {/* Footer component  */}
      <Footer />
    </div>
  );
}

export default App;
