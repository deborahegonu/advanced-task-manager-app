"use client"

import { z } from "zod"

export const SignUpFormSchema = z.object({
  id: z.string(),
  email: z.string().min(2, {
    message: 'Email is required.'
  }).email({
    message: 'Please enter a valid email.'
  }),
  password: z.string().min(2, {
    message: 'Password is required.'
  })
})


export const LoginFormSchema = z.object({
  email: z.string().min(2, {
    message: 'Email is required.'
  }).email({
    message: 'Please enter a valid email.'
  }),
  password: z.string().min(2, {
    message: 'Password is required.'
  })
})


export const TaskFormSchema = z.object({
  id: z.string(),
  userId: z.string(),
  description: z.string().min(1, {
    message: "Description is required.",
  }),
  priority: z.string().min(1, {
    message: 'Priority is required.'
  } ),
  category: z.string().min(1, {
    message: "Category is required",
  }),
  dueDate: z.string().min(1, {
    message: "Due date is required.",
  }),
  status: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
})

export const UpdateTaskFormSchema = z.object({
  id: z.string(),
  description: z.string().min(1, {
    message: "Description is required.",
  }).optional(),
  priority: z.string().min(1, {
    message: 'Priority is required.'
  } ).optional(),
  category: z.string().min(1, {
    message: "Category is required",
  }).optional(),
  dueDate: z.string().min(1, {
    message: "Due date is required.",
  }).optional(),
  status: z.string().optional(),
  updatedAt: z.string().optional(),
})


export const DeleteTaskFormSchema = z.object({
  id: z.string()
})