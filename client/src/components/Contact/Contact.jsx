// Importing necessary dependencies
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';  // Importing local styles for Contact component
import '../../App.css';  // Importing global styles

// Functional component for the Contact section
function Contact() {
    // Using useRef for form reference
    const reForm = useRef();

    // Function to send email on form submission
    const sendEmail = (e) => {
        e.preventDefault();

        // Using Email.js to send the form data as an email
        emailjs.sendForm('service_im9kdxc', 'template_pwa6448', reForm.current, 'LkT4LBtQzlJtM9o2G')
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again');
                }
            );
    };

    // Rendering the Contact section
    return (
        <section>
            <div className="container">
                {/* Background video for the contact section */}
                <video src="/assets/videos/pexels_videos_2421545 (2160p).mp4" autoPlay loop muted />
                
                {/* Heading for the contact section */}
                <h2 className="--text-center">CONTACT US</h2>

                {/* Form for user input with ref to access form data */}
                <form ref={reForm} onSubmit={sendEmail} className="--form-control --card">
                    <input type="text" placeholder="Full Name" name="User_name" required />
                    <input type="Email" placeholder="Email" name="User_email" required />
                    <input type="text" placeholder="Subject" name="Subject" required />
                    <textarea name="message" placeholder="Message" cols="30" rows="10"></textarea>
                    <button type="submit" className="--btn --btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

// Exporting the Contact component as the default export
export default Contact;
