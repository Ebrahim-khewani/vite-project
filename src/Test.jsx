// Import the necessary modules
import React from 'react';
import { Link } from 'react-router-dom';

// Define the Home component
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to About</Link>
    </div>
  );
};

// Define the About component
const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About page content.</p>
    </div>
  );
};

// Export the components
export { Home, About };