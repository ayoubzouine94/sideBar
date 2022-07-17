
import './App.css';
import SideBar from './components/sideBar/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Article from './pages/article/Article';
import Login from './pages/login/Login';
import Dossier from './pages/dossier/Dossier';
import Logistique from './pages/logistique/Logistique';
import Inventaire from './pages/inventaire/Inventaire';
import Historique from './pages/historique/Historique';
import Fournisseur from './pages/fournisseur/Fournisseur';
import Footer from './components/footer/Footer';
import Client from './pages/client/Client';

function App() {
  
  return (
<>
      <BrowserRouter>
      <SideBar>
          <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/article' element={<Article />} />
                <Route path='/dossier' element={<Dossier />} />
                <Route path='/logistique' element={<Logistique />} />
                <Route path='/historique' element={<Historique />} />
                <Route path='/fournisseur' element={<Fournisseur />} />
                <Route path='/inventaire' element={<Inventaire />} />    
                <Route path='/client' element={<Client />} />
          </Routes>
      </SideBar>
      </BrowserRouter>
      <div><Footer /></div>
      </>
    
  );
}

export default App;
