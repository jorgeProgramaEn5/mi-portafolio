import './Style/App.css';
import { NavBar, Banner, Skills, Projects, Contact, Footer } from './Components';


const App = ()=>{
  return (
    <div className='app'>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
