import './App.css';
import { Route, Switch } from 'react-router-dom';

import Book from './Books/Book';
import CheckPasswordCode from './User/CheckPasswordCode';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import Newchat from './Messenger/Newchat';
import Newtransaction from './Transactions/Newtransaction';
import PanelList from './User/Panel/PanelList';
import RecoverPassword from './User/RecoverPassword';
import Register from './Register/Register';
import Search from './Books/Search';


function App() {
  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/search/:level?">
          <Search />
        </Route>
        <Route path="/user/mypanel" exact>
          <PanelList />
        </Route>
        <Route path="/messages-chats/new" exact >
          <Newchat />
        </Route>
        <Route path="/book/detail/:id" exact >
          <Book />
        </Route>
        <Route path="/transactions/new" exact >
          <Newtransaction />
        </Route>
        <Route path="/user/password/recovery" exact >
          <RecoverPassword />
        </Route>
        <Route path="/user/password/reset/:code?" >
          <CheckPasswordCode />
        </Route>
        <Route path="/">No existe...</Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
