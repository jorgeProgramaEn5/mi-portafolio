import './Style/App.css';
import { NavBar, Banner, Skills } from './Components';


const App = ()=>{
  return (
    <div className='app'>
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
