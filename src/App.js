import './Style/App.css';
import { NavBar, Banner, Skills, Projects, Contact } from './Components';


const App = ()=>{
  return (
    <div className='app'>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
