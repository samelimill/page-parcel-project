import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },

      });
      console.log(mutationResponse.data.login.user.firstName)
      let userInfo = {
        Name: `${mutationResponse.data.login.user.firstName} ${mutationResponse.data.login.user.lastName}`, 
        Email: mutationResponse.data.login.user.email,
      } 
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log('error', e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
       <video src="/assets/videos/pexels_videos_2421545 (2160p).mp4" autoPlay loop muted />
      <Link to="/signup" style={{ color: 'white' }}>← Go to Signup</Link>

      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text" style={{ color: 'white' }}>The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end" style={{ marginTop: '10px' }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
