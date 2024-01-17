function getUserIdFromIdToken(idToken) {
  try {
    // Decode the JWT and extract the 'sub' claim
    const decodedToken = JSON.parse(atob(idToken.split(".")[1]));
    //used to decode the token and see what the token looks like
    // console.log('Decoded Token:', decodedToken);
    const userId = decodedToken.data._id; // Update the location to extract the user ID

    return userId;
  } catch (error) {
    // Handle decoding errors
    console.error("Error decoding token:", error.message);
    return null;
  }
}

export default getUserIdFromIdToken;
