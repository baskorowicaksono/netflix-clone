import Topbar from './components/topbar/Topbar';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Router>
        <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element= {<UserList />} />
            <Route path="/user/:userId" element= {<User />} />
            <Route path="/newUser" element= {<NewUser />} />
            <Route path="/products" element= {<ProductList />} />
            <Route path="/product/:productId" element= {<Product />} />
            <Route path="/newProduct" element= {<NewProduct />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
