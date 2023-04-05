import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Alert from './components/layout/Alert';
import { PokemonProvider } from './contexts/pokemon/PokemonContext';
import { AlertProvier } from './contexts/alert/AlertContext';
import Pokemon from './pages/Pokemon';


function App() {
  return (
    <PokemonProvider>
      <AlertProvier>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main>
              <Alert />
              <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/pokemon/:name' element={<Pokemon />} />
                <Route path='/*' element={<NotFound />}/>
              </Routes>
            </main>
          <Footer />
          </div>
        </Router>
      </AlertProvier>
    </PokemonProvider>
  );
}

export default App;
