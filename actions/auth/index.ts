"use server"

import * as z from "zod"
import { LoginFormSchema, SignUpFormSchema } from "@/lib/schema"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "@/constants";
import { cookies } from "next/headers";

const API_URL = 'http://localhost:4000';

export const CreateUser = async (data: z.infer<typeof SignUpFormSchema>): Promise<string> => {
  try {
    const response = await fetch(`${API_URL}/users?email=${data.email}`);
    const existingUsers = await response.json();

    const isEmailExists = existingUsers.length > 0;

    if (isEmailExists) {
      return 'Email already exists!';
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(data.password, salt);

    const newUser = {
      id: data.id,
      email: data.email,
      password: hash,
    };

    const createUserResponse = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    if (!createUserResponse.ok) {
      throw new Error('Failed to create user');
    }

    return 'User created successfully!';
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
    return 'An unexpected error occurred';
  }
};

  
  export const LoginUser = async (data: z.infer<typeof LoginFormSchema>) => {
    try {
      const response = await fetch(`${API_URL}/users?email=${data.email}`);
      const existingUsers = await response.json();
  
      if (existingUsers.length === 0) {
        return { status: 404, message: "User not found!" };
      }
  
      const { password, ...rest } = existingUsers[0];
  
      const isMatch = bcrypt.compareSync(data.password, password);
  
      if (!isMatch) {
        return { status: 401, message: "Password is incorrect!" };
      }
  
      const genAccessToken = jwt.sign(rest, JWT_SECRET, {
        expiresIn: "31d"
      });
  
      const cookieStore = await cookies();
      cookieStore.set('token', genAccessToken, { secure: true });
      cookieStore.set('user', JSON.stringify(rest));
  
      return {
        status: 200,
        message: "User Logged in successfully",
        token: genAccessToken,
        data: rest
      };
  
    } catch {
      return { status: 500, message: "An error occurred while logging in." };
    }
  };
  