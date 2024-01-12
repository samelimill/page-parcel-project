import '../../App.css'
import {Button} from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/assets/videos/pexels_videos_2421545 (2160p).mp4" autoPlay loop muted />
      <h1>Your Passport to a World of Stories</h1>
      <div className='copy-container'>
        <p>Discover a literary escape with Page Parcel – curated books delivered to you. Immerse in captivating tales, explore genres, and feed your reading passion. Your literary journey starts now.</p>
        {/* <p>Immerse yourself in captivating tales, explore new genres, and indulge your passion for reading with our curated book subscription service.</p> */}
      </div>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>GET STARTED</Button>
        {/* <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>Books</Button> */}
      </div>
    </div>
  )
}

export default HeroSection;
