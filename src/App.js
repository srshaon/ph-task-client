import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Status from './components/Status/Status';
import AllMedia from './components/AllMedia/AllMedia';
import Top3Media from './components/Top3Media/Top3Media';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/status'>
            <Status></Status>
          </Route>
          <Route exact path='/medias'>
            <AllMedia></AllMedia>
          </Route>
          <Route exact path='/top3'>
            <Top3Media></Top3Media>
          </Route>

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
