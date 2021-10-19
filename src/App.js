import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import AboutUS from './Component/AboutUs/AboutUS';
import Blog from './Component/Blog/Blog';
import Login from './Component/Login/Login';
import Notfound from './Component/Notfound/Notfound'
import Header from './Component/Header/Header';
import Services from './Component/Services/Services';
import Details from './Component/Details/Details';
import AuthProvider from './Component/Context/AuthProvider';
import PrivateRout from './Component/PrivateRout/PrivateRout';
import Footer from './Component/footer/Footer';
import Register from './Component/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/home">
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <PrivateRout path="/services">
            <Header></Header>
            <Services></Services>
            <Footer></Footer>
          </PrivateRout>
          <PrivateRout path="/details/:serviceId">
            <Header></Header>
            <Details></Details>
            <Footer></Footer>
          </PrivateRout>
          <PrivateRout path="/aboutus">
            <Header></Header>
            <AboutUS></AboutUS>
            <Footer></Footer>
          </PrivateRout>
          <PrivateRout path="/blog">
            <Header></Header>
             <Blog></Blog>
             <Footer></Footer>
          </PrivateRout>
          <Route path="/login">
            <Header></Header>
            <Login></Login>
            <Footer></Footer>
          </Route>
          <Route path="/register">
            <Header></Header>
            <Register></Register>
            <Footer></Footer>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        
        
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
