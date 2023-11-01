import React from 'react';
import * as Theme from '@theme';
import { UserProvider, useUser } from '@providers';

/* TODO:
2. Display user's full name and their email. Use UserProvider's functionality (see providers.js)
3. Display user's masked phone number, and implement a way to unmask it. Use UserProvider's context.
*/
const Card = () => {
  const user = React.useContext(useUser)

  return (
    <div id="card">
      {user && (
          <div id="userInfo">{user}</div>
      )}
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
  const [userNameData, setUserNameData] = React.useState('Megan Ring');

  return (
    <div id="home" style={homeStyle}>
      <UserProvider value={[userNameData]}>
        <Card />
      </UserProvider>
    </div>
  );
}

export default Home;
