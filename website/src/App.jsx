import {Name, CenterText, ScrollText} from './components/texts.jsx';
import ProjectCarousel from './components/carousel.jsx';


function App() {
  return (
    <div className="main-layout">
      <Name/> 
      <CenterText/> 
      <ScrollText/>
      <ProjectCarousel/>
    </div>
  );
}

export default App;