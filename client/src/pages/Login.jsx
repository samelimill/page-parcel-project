import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState(false); // Define the 'error' state variable

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const email = event.target.email.value; // Get the entered email value from the form
    const password = event.target.password.value; // Get the entered password value from the form
    
    console.log(email + password);
    // Basic validation (you might want to implement more thorough validation)
    if (email === 'test@test.com' && password === 'password') {
      // Successful login logic (replace this with your actual login logic)
      // For example, setting the logged-in state or redirecting to another page
      console.log('Login successful!');
    } else {
      // Set the error state to true if login fails
      setError(true);
    }
  };

  return (
    <div className="container my-1">
      <Link to="/signup">← Need to Signup?</Link>

      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
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
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        )}
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
