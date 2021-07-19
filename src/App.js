import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import Book from './components/pages/Book/Book';
import Programs from './components/pages/Programs/Programs';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Footer from './components/pages/Footer/Footer';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const { t } = useTranslation();

  function handleClick(lang) {
    i18next.changeLanguage(lang)
  }
  return (
    <div className="App">
      
    <Router>
      <Navbar />
      <nav style={{ width: '100%', padding: '1rem 0', backgroundColor:'#1c2237' }}>
          <button onClick={()=>handleClick('en')} >
            English
          </button>
          <button onClick={()=>handleClick('fr')} >
            French
          </button>
          </nav>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/programs' component={Programs} />
        <Route path='/book' component={Book} />
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
