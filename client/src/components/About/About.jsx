import React from 'react';
import UserCard from './UserCard';
import './About.css'
import '../../App.css'


const About = () => {
    const users = [
        { name: 'Hugo (Jr) Solorio', role: 'Full-Stack Web Developer', image: 'assets/images/jr.png', link: 'https://github.com/Hsolojr'},
        { name: 'Samuel Milligan', role: 'Full-Stack Web Developer', image: 'assets/images/sam.png', link: 'https://github.com/samelimill'},
        { name: 'Cody Schwengler', role: 'Full-Stack Web Developer', image: 'assets/images/cody.png', link: 'https://github.com/Rounderr21'},
        { name: 'Heather Nguyen', role: 'Full-Stack Web Developer', image: 'assets/images/heather.png', link: 'https://github.com/viaheather'},
      ];

  return (
    <div className="aboutContainer">
    <video src="/assets/videos/pexels_videos_2421545 (2160p).mp4" autoPlay loop muted />
      <h2 className="about">ABOUT US</h2>
      <div className="user-grid">
        {users.map((user, index) => (
          <UserCard key={index} {...user} />
        ))}
      </div>
      </div>
  );
};

export default About;