// Importing stylesheets and components
import '../../App.css';  // Importing global styles
import {Button} from './Button';  // Importing the Button component
import './HeroSection.css';  // Importing local styles for HeroSection component

// Functional component for the HeroSection
function HeroSection() {
  return (
    <div className='hero-container'>
      {/* Background video for the hero section */}
      <video src="/assets/videos/pexels_videos_2421545 (2160p).mp4" autoPlay loop muted />

      {/* Main heading for the hero section */}
      <h1>Your Passport to a World of Stories</h1>

      {/* Container for the text content */}
      <div className='copy-container'>
        {/* Paragraph introducing the book subscription service */}
        <p>Discover a literary escape with Page Parcel – curated books delivered to you. Immerse in captivating tales, explore genres, and feed your reading passion. Your literary journey starts now.</p>
        {/* Additional paragraph (commented out) for an alternative description */}
        {/* <p>Immerse yourself in captivating tales, explore new genres, and indulge your passion for reading with our curated book subscription service.</p> */}
      </div>

      {/* Container for the call-to-action buttons */}
      <div className='hero-btns'>
        {/* Button component with 'GET STARTED' text, outline style, and large size */}
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
        {/* Additional button (commented out) for 'Books' with primary style and large size */}
        {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Books</Button> */}
      </div>
    </div>
  );
}

// Exporting the HeroSection component as the default export
export default HeroSection;
