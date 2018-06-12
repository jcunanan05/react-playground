import React from 'react';
import PropTypes from 'prop-types';

const Login = (props) => (
  <nav className="login">
    <h2>Inventory Login</h2>

    <p>Sign-in to your manager's Inventory</p>
    <button className="github" onClick={() => props.authenticate('Github')}>
      Login to Github
    </button>

    <button className="twitter" onClick={() => props.authenticate('Twitter')}>
      Login to Twitter
    </button>

    <button className="facebook" onClick={() => props.authenticate('Facebook')}>
      Login to Facebook
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
}

export default Login;
