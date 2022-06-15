import { createContext, useContext, useState } from "react";
import { useUserData } from "./hooks";

export const UserContext = createContext({ user: null, username: null });

export const UserProvider = (props) => {
  const { user, username } = useUserData();

  const value = {
    user,
    username,
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const useUserContext = () => {
  return useContext(UserContext);
};
