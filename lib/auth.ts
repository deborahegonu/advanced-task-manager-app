"use server";

import { cookies } from "next/headers";

export const GetUserCookieData = async () => {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get('user')?.value;  
  const user = userCookie ? JSON.parse(userCookie) : null; 
  return user;
}

export const LogoutUser = async () => {
  (await cookies()).set('user', '');
  (await cookies()).set('token', '');
  return true;
}