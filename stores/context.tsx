"use client"

import { UserType } from '@/types';
import React, { createContext, useState, ReactNode, useContext } from 'react'

export type UserState = {
  user: UserType
}

const UserContext = createContext<{
  user: UserType;
  setUserData: (userData: UserType) => void;
} | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType>({})

  const setUserData = (userData: UserType) => {
    setUser(userData);
  }

  return (
    <UserContext.Provider value={{ user, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}