import {useRef} from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import '../../App.css'
function contact() {
    const reForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_im9kdxc', 'template_pwa6448', reForm.current, 'LkT4LBtQzlJtM9o2G')
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
            alert('Failed to send the message, please try again')
            }
        )
      }
    

    return (
      <section>
        
        <div className="container">
        <video src="/assets/videos/pexels_videos_2421545 (2160p).mp4" autoPlay loop muted />
          <h2 className="--text-center">CONTACT US</h2>
          <form ref={reForm} onSubmit={sendEmail} className="--form-control --card">
          <input type="text"  placeholder="Full Name" name="User_name" required/>
          <input type="Email"  placeholder="Email" name="User_email" required/>
          <input type="text"  placeholder="Subject" name="Subject" required/>
          <textarea name="message" placeholder="Message" cols="30" rows="10"></textarea>
          <button type="submit" className="--btn --btn-primary">
              Send Message
          </button>
          </form>
          
        </div>
      </section>
    )
  }
  
  export default contact