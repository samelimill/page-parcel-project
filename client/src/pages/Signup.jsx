import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [error, setError] = useState(false); // Define the 'error' state variable

  const [addUser] = useMutation(ADD_USER); // Use the ADD_USER mutation

  const handleSignup = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const firstName = event.target.firstName.value; // Get the entered first name value from the form
    const lastName = event.target.lastName.value; // Get the entered last name value from the form
    const email = event.target.email.value; // Get the entered email value from the form
    const password = event.target.password.value; // Get the entered password value from the form

    // Basic validation (you might want to implement more thorough validation)
    if (email && password) {
      try {
        // Call the addUser mutation to add the user data to the database
        await addUser({
          variables: { firstName, lastName, email, password },
        });

        // Successful signup logic
        console.log('Signup successful!');
      } catch (error) {
        console.error('Error signing up:', error);
      }
    } else {
      // Set the error state to true if signup fails due to missing email or password
      setError(true);
    }
  };

  // Rest of the code...

  return (
    <div className="container my-1">
       <video src="/assets/videos/pexels_videos_2421545 (2160p).mp4" autoPlay loop muted />
      <Link to="/login" style={{ color: 'white' }}>← Go to Login</Link>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="text"
            id="firstName"
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="text"
            id="lastName"
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
          />
        </div>
        {error && (
          <div>
            <p className="error-text">Please provide an email and password</p>
          </div>
        )}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
