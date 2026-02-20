import {Name, CenterText} from './components/texts.jsx';
import ProjectCarousel from './components/carousel.jsx';


function App() {
  return (
    <div className="main-layout">
      <Name/> 
      <CenterText/> 
      <ProjectCarousel/>
    </div>
  );
}

export default App;