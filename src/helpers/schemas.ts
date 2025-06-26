import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email("Email is required"),
  password: z.string().min(1, "Password is required"),
});

export const VerifyEmailSchema = z.object({
  email: z.string().email("Email is required"),
  code: z.string().min(1, "Code is required"),
});
