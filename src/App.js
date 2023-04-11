import "./App.css";
import Header from "./components/Header";
import Fun from "./components/Fun";
import Partnership from "./components/Partnership";
import Fund from "./components/Fundraising";
import Testimonial from "./components/Testimonial";
import "../src/assets/main.scss";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Header />
      <Fun />
      <Partnership />
      <Fund />
      <Testimonial />
      <Cards />
    </>
  );
}

export default App;
