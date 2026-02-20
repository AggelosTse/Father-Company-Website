import {Name, CenterText, Language} from './components/texts.jsx';
import ProjectCarousel from './components/carousel.jsx';
import { EmailButton } from './components/emailform.jsx';

function App() {
  return (
    <div>
      <Name/> 
      <Language/>
      <CenterText/> 
      <ProjectCarousel/>

      <EmailButton/>

    </div>
  );
}

export default App;