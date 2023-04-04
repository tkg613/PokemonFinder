import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { PokemonProvider } from './contexts/pokemon/PokemonContext';

function App() {
  return (
    <PokemonProvider>
      <Router>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/*' element={<NotFound />}/>
            </Routes>
          </main>
        <Footer />
        </div>
      </Router>
    </PokemonProvider>
  );
}

export default App;
