// About.js
import React from 'react';
import './About.css';
import AmruthaImage from '../images/amrutha.jpg';
import RohithImage from '../images/rohith.jpg';
import AmarnathImage from '../images/amar.jpg';
import ManiChandraImage from '../images/mani.jpg';
import GnapikaImage from '../images/gnapika.jpg';
 // Make sure to create this CSS file for styling

const teamMembers = [
  
  {
    name: 'Amarnath V',
    image: AmarnathImage,
    description: 'Amarnath(221FA23021) is focused on database management and security. He ensures our applications have solid data structures, optimized queries, and secure data handling practices.',
  },
  {
    name: 'ManiChandra B',
    image: ManiChandraImage,
    description: 'ManiChandra(221FA23025) is a talented UI/UX designer, skilled in making user-centric interfaces. His designs ensure our applications are intuitive and visually engaging for an optimal user experience.',
  },
  {
    name: 'Gnapika A',
    image: GnapikaImage, // Replace with actual image URLs
    description: 'Gnapika(221FA23027) is a B.Tech student specializing in MERN stack development. With a passion for front-end design, she brings ideas to life with clean and interactive UI components.',
  },
  {
    name: 'Amrutha Ch',
    image: AmruthaImage,
    description: 'Amrutha(221FA23044) is our full-stack developer, experienced in both front-end and back-end technologies. Her knowledge of React and MongoDB helps her build cohesive and data-driven applications.',
  },
  {
    name: 'Rohith P',
    image: RohithImage,
    description: 'Rohith(221FA23045) is a backend enthusiast, skilled in crafting efficient server-side logic using Node.js and Express. He’s dedicated to creating robust and scalable APIs for smooth data flow.',
  },
];

function About() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>We are a team of dedicated professionals working together to create amazing content and solutions.</p>
      <div className="team-section">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="profile-image" />
            <h2>{member.name}</h2>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
