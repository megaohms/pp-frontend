import React from 'react';
import * as Theme from '@theme';
import { UserProvider, useUser } from '@providers';

const cardStyle = {
  color: Theme.colors.primary
}

const buttonStyle = {
    color: Theme.colors.primary,
    border: `1px solid ${Theme.colors.primary} rounded`,
}

const Card = () => {
  const {userName, userEmail, userPhone, togglePhoneMasked} = React.useContext(useUser)

  return (
    <div id="card" style={cardStyle}>
      <p>
        Name: {userName}
      </p>

      <p>
        Email: {userEmail}
      </p>

      <p>
        Phone: {userPhone}
      </p>

      <button onClick={() => togglePhoneMasked()} style={buttonStyle}>
        Mask/Unmask Phone Number
      </button>
    </div>
  );
}

const homeStyle = {
  backgroundColor: Theme.colors.beige,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const Home = () => (
  <div id="home" style={homeStyle}>
    <UserProvider>
      <Card />
    </UserProvider>
  </div>
);

export default Home;
