import { BrowserRouter, Routes, Route } from "react-router-dom";

//main page
import { Name, CenterText } from "./components/mainPage/texts.jsx";
import ProjectCarousel from "./components/mainPage/carousel.jsx";
import { EmailButton } from "./components/mainPage/emailPageNavig.jsx";

//email form page
import BackButton from "./components/emailPage/backbutton.jsx";
import EmailForm from "./components/emailPage/emailform.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
        //main page
          path="/"
          element={
           
            <div>
              <Name />
              <CenterText />
              <ProjectCarousel />
              <EmailButton />
            </div>
          }
        />

        <Route
        //email page
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
