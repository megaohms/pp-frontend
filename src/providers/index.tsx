import React from 'react';
import * as API from '@api';

const UserContext = React.createContext(null);

interface UserProviderProps {
  children: React.ReactNode;
};

export const UserProvider = ({ children, ...props }: UserProviderProps) => {
  const [userName, setUserName] = React.useState('');
  const [userEmail, setUserEmail] = React.useState('');
  const [userPhone, setUserPhone] = React.useState('*-***-***-****');
  const [phoneMasked, setPhoneMasked] = React.useState(true);

  const togglePhoneMasked = () => {setPhoneMasked(!phoneMasked)};

  const setUserData = React.useCallback(data => {
    setUserName(`${data.first_name} ${data.last_name}`)
    setUserEmail(data.email)
  }, [])

  const setPhoneData = React.useCallback(data => {
    setUserPhone(data.phone)
  }, [])

  API.me().then(setUserData)

  if (!phoneMasked) {
    API.phone().then(setPhoneData)
  }

  return (
      <UserContext.Provider value={{userName, userEmail, userPhone, togglePhoneMasked}}>
        {children}
      </UserContext.Provider>
  );
}

export const useUser = UserContext;

