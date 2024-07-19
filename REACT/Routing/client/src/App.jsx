import { Routes, Route } from "react-router-dom";


import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ControlledForm from './components/ControlledForm';
import About from "./components/About";
import Wildcard from "./components/Wildcard";
import DevelopersList from "./components/Developers";
import DeveloperDetails from "./components/DeveloperDetails";

function App() {

  return (
    <div id="page-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ControlledForm />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/developers" element={<DevelopersList />} />
          <Route path="/developers/:developerId" element={<DeveloperDetails />} />
          <Route path="*" element={<Wildcard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
