import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Navbar from './Components/Navbar/Navbar'
import Navbar2 from './Components/Navbar2/Navbar2'
import Home from './Containers/Home/Home';
import Portfolio from './Containers/Portfolio/Portfolio';
import AddArticle from './Containers/AddArticle/AddArticle';
import Article from './Containers/Article/Article';
import OnePortfolio from './Containers/Portfolio/onePortfolio';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import Skills from './Components/Skills/Skills';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop' 


const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  return (
    <div id='top' className={`${themeName} app`}>
      <Router> 
        <Header />
        <Switch>

          <Route path="/" exact component={Home}></Route>
          <Route path="/ecrire" exact component={AddArticle}></Route>
          <Route path="/portfolio" exact component={Portfolio}></Route>
          <Route path="/articles/:slug" exact component={Article}></Route>
          <Route path="/portfolio/:slug" exact component={OnePortfolio}></Route>

        </Switch>

        <Navbar />
        <ScrollToTop />
      </Router>
    </div>
  );
}

export default App;
