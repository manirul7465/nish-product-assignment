import NotFound from './Pages/NotFound/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './Pages/Header/Header';

import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Authprovider from './Context/Authprovider/Authprovider';
import Allproducts from './Pages/Login/Allproducts/Allproducts';
import Purchese from './Pages/Purchese/Purchese/Purchese';
import Privateroute from './Pages/Login/PrivateRoute/Privateroute';
import Dashbord from './Pages/Dashbord/Dashbord';
import Footer from './Pages/Footer/Footer';







function App() {
  return (
    <div className="App">
      <Authprovider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/allproducts">
              <Allproducts></Allproducts>
            </Route>
            <Route path="/header">
              <Header></Header>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Privateroute path="/purchese/:productId">
              <Purchese></Purchese>
            </Privateroute>
            <Privateroute path="/dashbord">
              <Dashbord></Dashbord>
            </Privateroute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
           <Footer></Footer>
        </Router>
      </Authprovider>
    </div>
  );
}

export default App;
