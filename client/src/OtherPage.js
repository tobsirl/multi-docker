import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default () => {
  return (
    <Router>
      <div>
        I'm some other page!
        <Link to="/">Go back home</Link>
      </div>
    </Router>
  );
};
