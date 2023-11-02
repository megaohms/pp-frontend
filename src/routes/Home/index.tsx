import React from 'react';
import * as Theme from '@theme';
import { UserProvider, useUser } from '@providers';

/* TODO:
3. Display user's masked phone number, and implement a way to unmask it. Use UserProvider's context.
*/

const cardStyle = {
  color: Theme.colors.primary
}
const Card = () => {
  const {userName, userEmail} = React.useContext(useUser)

  return (
    <div id="card" style={cardStyle}>
      <p>
        Name: {userName}
      </p>

      <p>
        Email: {userEmail}
      </p>
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

const Home = () => {
    // todo: manage button state here


  return (
    <div id="home" style={homeStyle}>
      <UserProvider>
        <Card />
      </UserProvider>
    </div>
  );
}

export default Home;
