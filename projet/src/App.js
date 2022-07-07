import './App.scss';
import { SideNavigation } from './container/SideNavigation';
import { NewUser } from './container/NewUser';
import { Welcome } from './container/Welcome';
import { ConsultProductContainer } from './container/ConsultProductContainer';
import { CartContainer } from './container/CartContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from './component/SignIn';
import { useEffect, useState } from 'react';
import UserContext from './context/UserContext';


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState("");
  const [cart, setCart] = useState([{}]);

  useEffect(() => {
    const data = localStorage.getItem('userData');
    if(data) {
      const json = JSON.parse(data);
      setIsAuthenticated(json.isAuthenticated);
      setName(json.name);
      setCart(json.cart);
    }
  }, []);



  return (
    <div className="App">
      <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated, name, setName, cart, setCart }} >
        <SideNavigation />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/signup" element={<NewUser />} />
            <Route exact path="/consultproduct" element={<ConsultProductContainer />} />
            <Route exact path="/cart" element={<CartContainer />} />
            <Route exact path="/signin" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
