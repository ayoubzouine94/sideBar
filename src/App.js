
import './App.css';
import SideBar from './components/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashbBoard from './pages/DashbBoard';
import About from './pages/About';
import Analytics from './pages/Analytics';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Comment from './pages/Comment'

function App() {
  
  return (

      <BrowserRouter>
      <SideBar>
          <Routes>
                <Route path='/' element={<DashbBoard />} />
                <Route path='/dashboard' element={<DashbBoard />} />
                <Route path='/about' element={<About />} />
                <Route path='/comment' element={<Comment />} />
                <Route path='/analytics' element={<Analytics />} />
                <Route path='/product' element={<Product />} />
                <Route path='/productList' element={<ProductList />} />
                <Route path='/ali' element={<ProductList />} />
          </Routes>
      </SideBar>
        
        
      </BrowserRouter>
      

    
    
  );
}

export default App;
