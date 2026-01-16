import './App.css'
import { Navbar } from './components/navbar';
import AboutOurStuff from './components/AboutOurStuff';
import HorizontalImageSlider from './components/HorizontalImageSlider';
import Team from './Pages/Team';
import Footer from './components/shadcn-studio/blocks/footer-component-01/footer-component-01';

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
