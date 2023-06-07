import './Style/App.css';
import { NavBar, Banner, Skills, Projects } from './Components';


const App = ()=>{
  return (
    <div className='app'>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
