import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_PASSWORD } from '../../utils/mutations';
import getUserIdFromIdToken from '../../components/Context/UserContext';

const UpdatePasswordForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [updatePassword] = useMutation(UPDATE_PASSWORD);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const idToken = localStorage.getItem('id_token');
    //making sure that the token is being pulled from local storage successfully
    // console.log('id_token:', idToken);
  
    if (idToken) {
      const user = getUserIdFromIdToken(idToken);
      //making sure that the user id is being pulled from the token successfully
    //   console.log('userId:', user);
      setUserId(user);
    } else {
      console.error('id_token not found in localStorage');
    }
  }, []);
  

  const handleUpdatePassword = async (event) => {
    event.preventDefault();

    if (newPassword === confirmPassword) {
      try {
        await updatePassword({
        variables: { id: userId, password: newPassword }
        });
        setSuccessMessage('Password Has Been Updated!');
      } catch (error) {
        console.error(error);
        setError('Error updating password: ' + error.message);
      }
    } else {
      setError('New password and confirm password do not match.');
    }
  };

  return (
    <div>
      <h2>UPDATE PASSWORD</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleUpdatePassword}>
        <br />
        <label>
          <input
            type="password"
            value={newPassword}
            placeholder="New Password"
            onChange={(event) => setNewPassword(event.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default UpdatePasswordForm;
