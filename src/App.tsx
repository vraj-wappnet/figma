import "./App.css";
import AboutUs from "./components/AboutUs";
import ChefBeliefPage from "./components/ChefBeliefPage";
import FindUsPage from "./components/FindUsPage";
import HeroSection from "./components/HeroSection";
import InstagramCard from "./components/InstagramCard";
import LaurelsPage from "./components/LaurelsPage";
import Navbar from "./components/Navbar";
import NewsletterPage from "./components/NewsletterPage";
import SpecialsPage from "./components/SpecialsPage";
import TermsPage from "./components/TermsPage";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <HeroSection />
        <AboutUs />
        <SpecialsPage />
        <ChefBeliefPage />
        <LaurelsPage />
        <InstagramCard />
        <FindUsPage />
        <NewsletterPage />
        <TermsPage />
      </div>{" "}
    </>
  );
}

export default App;
