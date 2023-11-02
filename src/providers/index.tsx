import React from 'react';
import * as API from '@api';

/* TODO:
Complete the UserProvider to manage user data and phone number masking.
1. Fetch user data with API.me() on provider's mount.
2. Implement a function to toggle phone number masking (you can fetch unmasked phone number with API.phone()
3. Pass down the user data and the toggle function to the context value.
*/

const UserContext = React.createContext(null);

interface UserProviderProps {
  children: React.ReactNode;
};

export const UserProvider = ({ children, ...props }: UserProviderProps) => {
  const [userName, setUserName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const [userPhone, setUserPhone] = React.useState('');

  const setUserData = React.useCallback(data => {
    setUserName(`${data.first_name} ${data.last_name}`)
    setUserEmail(data.email)
    setUserPhone(data.masked_phone)
  }, [])

  API.me().then(setUserData)

  return (
      <UserContext.Provider value={{userName, userEmail, userPhone}}>
        {children}
      </UserContext.Provider>
  );
}

// todo: verify BPs here
export const useUser = UserContext;

