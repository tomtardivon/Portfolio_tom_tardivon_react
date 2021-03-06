import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Home from './Containers/Home/Home';
import Portfolio from './Containers/Portfolio/Portfolio';
import OnePortfolio from './Containers/Portfolio/onePortfolio';
import './App.css'
import { BrowserRouter as Router, Switch, Route,Redirect  } from 'react-router-dom'
import Header from './Components/Header/Header';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import Footer from './Components/Footer/Footer'
import FormulaireContact from './Components/FormulaireContact/FormulaireContact'
import{ init } from 'emailjs-com';
init("user_7qvRVSaORplBM05aWzn7W");

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  return (
    <div id='top' className={`${themeName} app`}>
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <main>
          <ScrollToTop/>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/portfolio" exact component={Portfolio}></Route>
            <Route path="/contact" exact component={FormulaireContact}></Route>
            <Route path="/portfolio/:slug" exact component={OnePortfolio}></Route>

            <Redirect from="*" to="/" />.
          </Switch>
          
        </main>
       
      </Router>
      <Footer />
    </div>
  );
}

export default App;
