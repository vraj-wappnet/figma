import "./App.css";
import ClientSection from "./pages/ClientSection";
import Home from "./pages/Home";
import Navbarr from "./pages/Navbarr";
import Letter from "./pages/Letter";
import Business from "./pages/Business";
function App() {
  return (
    <>
      <div className="App">
        <Navbarr />
        <Home />
        <ClientSection />
        <Letter />
        <Business />
        {/* <Navbar /> */}
        {/* <HeroSection />
        <AboutUs />
        <SpecialsPage />
        <ChefBeliefPage />
        <LaurelsPage />
        <InstagramCard />
        <FindUsPage />
        <NewsletterPage />
        <TermsPage /> */}
      </div>{" "}
    </>
  );
}

export default App;
