import React from 'react';

const UserCard = ({ name, role, image, link }) => {
  return (
    <div className="user-card">
      <img src={image} alt={name} />
      <a href={link}><h3>{name}</h3></a>
      <p>{role}</p>
    </div>
  );
};

export default UserCard;