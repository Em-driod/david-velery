import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import LandingPage from "./pages/landingPage";

const App = () => {
  

  return (
    <>
      <Navbar />
      <div>
        {/* Display the inputText value */}
      
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
       

        {/* Add more routes as needed */}
      </Routes>
    </>
  );
};

export default App;
