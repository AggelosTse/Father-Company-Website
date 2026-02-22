import { Name, CenterText } from "./components/texts.jsx";
import ProjectCarousel from "./components/carousel.jsx";
import { EmailButton } from "./components/emailPageNavig.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import BackButton from "../../pages/backbutton.jsx";

import EmailForm from "../../pages/emailform.jsx";

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

        <Route
          path="/contact"
          element={
            <div>
              <BackButton />
              <EmailForm />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
