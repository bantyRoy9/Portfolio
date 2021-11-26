// import logo from './logo.svg';
import react from 'react';
import './App.css';
import {About, Contact , Footer , Header, Projects, Skills} from './containers'
import {Article, Navbar} from './components'

const  App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <About />
      <Skills/>
      <Projects />
    </div>
    );
}

export default App;
