import {Name, CenterText} from './components/texts.jsx';
import ProjectCarousel from './components/carousel.jsx';
import { EmailButton } from './components/emailform.jsx';

function App() {
  return (
    <div>
      <Name/> 

      <CenterText/> 
      <ProjectCarousel/>

      <EmailButton/>

    </div>
  );
}

export default App;