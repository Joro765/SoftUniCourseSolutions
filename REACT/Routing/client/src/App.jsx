import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import UncontrolledForm from "./components/UncontrolledForm";
import ControlledForm from './components/ControlledForm';

function App() {

  return (
    <div id="page-container">
      <Header />
      <main>
        <div className="container">
          <UncontrolledForm />
        </div>
        <div className="container">
          <ControlledForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
