// Import React library
import React from "react";

// Define UserCard component
const UserCard = ({ name, role, image, link }) => {
  return (
    <div className="user-card">
      <img src={image} alt={name} />
      <a href={link}>
        <h3>{name}</h3>
      </a>
      <p>{role}</p>
    </div>
  );
};

// Export UserCard component as default
export default UserCard;
