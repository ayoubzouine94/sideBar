
import './App.css';
import SideBar from './components/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Comment from './pages/Comment'
import Article from './pages/Article';
import Login from './pages/Login';
import Dossier from './pages/Dossier';
import Logistique from './pages/Logistique';
import Inventaire from './pages/Inventaire';
import Historique from './pages/Historique';
import Fournisseur from './pages/Fournisseur';

function App() {
  
  return (

      <BrowserRouter>
      <SideBar>
          <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/article' element={<Article />} />
                <Route path='/comment' element={<Comment />} />
                <Route path='/dossier' element={<Dossier />} />
                <Route path='/logistique' element={<Logistique />} />
                <Route path='/historique' element={<Historique />} />
                <Route path='/fournisseur' element={<Fournisseur />} />
                <Route path='/inventaire' element={<Inventaire />} />    
          </Routes>
      </SideBar>
        
        
      </BrowserRouter>
      

    
    
  );
}

export default App;
