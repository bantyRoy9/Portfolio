// import logo from './logo.svg';
// import react from 'react';
import './App.css';
import {About, Contact , Footer , Header, Projects, Skills} from './containers'
import { Navbar} from './components'
import { useEffect, useState } from 'react';
import Loading from './components/Loading/Loading';

const  App = () => {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },2900);
  },[])
  return (
    <div className="App">
      {loading ? <><Loading/></>:<>
      <div className="gradient__bg h10">
        <Navbar />
        <Header />
      </div>
      <About />
      <Skills/>
      <Projects />
      <Contact/>
      <Footer />
      </>}
    </div>
    );
}

export default App;
