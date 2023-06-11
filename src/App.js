import './Style/App.css';
import { NavBar, NavBarDos, Banner, Skills, Projects, Contact, Footer } from './Components';


const App = ()=>{
  return (
    <div className='app'>
      <NavBarDos />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
