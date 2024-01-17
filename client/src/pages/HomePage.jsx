// Importing the CSS file
import "../App.css";

// Importing the HeroSection component
import HeroSection from "../components/Home/HeroSection";

// Importing the Cards component
import Cards from "../components/Home/Cards";

// Defining the Home function component
function Home() {
  return (
    <>
      {/* Rendering the HeroSection component */}
      <HeroSection />

      {/* Rendering the Cards component */}
      <Cards />
    </>
  );
}

// Exporting the Home component as the default export
export default Home;
