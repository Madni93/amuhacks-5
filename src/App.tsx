import './App.css'
import { Navbar } from './components/navbar';
import AboutOurStuff from './components/AboutOurStuff';
import HorizontalImageSlider from './components/HorizontalImageSlider';
import Team from './Pages/Team';

function App() {

  return (
    <div className='flex flex-col'>
      <Navbar />
      <HorizontalImageSlider />
      <AboutOurStuff />
      <Team />
      
    </div>
  )
}

export default App
