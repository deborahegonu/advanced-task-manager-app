
"use client";

import { GetUserCookieData } from "@/lib/auth";
import { UserType } from "@/types";
import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";

export type UserState = {
  user: UserType | null;
};

const UserContext = createContext<
  | {
      user: UserType | null;
      setUserData: (userData: UserType | null) => void;
    }
  | undefined
>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);

  const setUserData = (userData: UserType | null) => {
    setUser(userData);
  };

  useEffect(() => {
    const getCookie = async () => {
      const userData = await GetUserCookieData();
      setUser(userData);
    };
    getCookie();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
