import "./app.css";

import Header from "./Components/header/Header";
import Hero from "./Components/hero/Hero";
import Companies from "./Components/companies/Companies";
import Residencies from "./Components/residencies/Residencies";
import Value from "./Components/value/Value";
import Contact from "./Components/contact/Contact";
import GetStarted from "./Components/getStarted/GetStarted";
import Footer from "./Components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-grad"></div>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
