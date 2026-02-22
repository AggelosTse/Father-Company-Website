import { Name, CenterText } from "./components/texts.jsx";
import ProjectCarousel from "./components/carousel.jsx";
import { EmailButton } from "./components/emailform.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import EmailFormPage from '../../pages/emailPage.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            /*Main Page*/
            <div>
              <Name />
              <CenterText />
              <ProjectCarousel />
              <EmailButton />
            </div>
          }
        />

        <Route path="/contact" element={<EmailFormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
