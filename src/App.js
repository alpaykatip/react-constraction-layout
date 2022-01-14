import ChooseUsCards from "./components/ChooseUsCards";
import ContactForm from "./components/ContactForm";
import FaqAccordion from "./components/FaqAccordion";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Hero />
      <ChooseUsCards />
      <Services />
      <FaqAccordion />
      <Reviews />
      <ContactForm />
    </div>
  );
}

export default App;
