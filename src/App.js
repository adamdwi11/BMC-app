import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//style
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './components/pages/Home';
import Main from './components/atoms/main';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import Product from './components/pages/Product';
import CustomerRelationship from './components/pages/CustomerRelationship';
import Article from './components/pages/Article';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Main />}>
          <Route path={'/'} element={<Home />} />
          <Route path={'product'} element={<Product />} />
          <Route path={'contact'} element={<Contact />} />
          <Route path={'about-us'} element={<About />} />
          <Route path={'article'} element={<Article />} />
          <Route path={'gallery'} element={<Gallery />} />
          <Route path={'customer-relationship'} element={<CustomerRelationship />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
