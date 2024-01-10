import '../../App.css'
import {Button} from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src="/assets/videos/pexels_videos_2421545 (2160p).mp4" autoPlay loop muted />
      <h1>BOOK SUBSCRIPTION</h1>
      <p>Your next great read.</p>
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
