import './Style/App.css';
import { NavBarDos, Banner, Skills, Projects, ContactEmailjs, Footer } from './Components';


const App = ()=>{
  return (
    <div className='app'>
      <NavBarDos />
      <Banner />
      <Skills />
      <Projects />
      <ContactEmailjs />
      <Footer />
    </div>
  );
}

export default App;
