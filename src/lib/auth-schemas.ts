import { z } from 'zod';

// Login Form Schema
export const loginSchema = z.object({
  identifier: z.string()
    .min(1, 'กรุณากรอก username หรือ email')
    .refine((val) => {
      // Check if it's email or username
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
      return emailRegex.test(val) || usernameRegex.test(val);
    }, 'รูปแบบ email หรือ username ไม่ถูกต้อง'),
  password: z.string()
    .min(6, 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร'),
});

// Register Form Schema
export const registerSchema = z.object({
  username: z.string()
    .min(3, 'username ต้องมีอย่างน้อย 3 ตัวอักษร')
    .max(20, 'username ต้องไม่เกิน 20 ตัวอักษร')
    .regex(/^[a-zA-Z0-9_]+$/, 'username ใช้ได้เฉพาะตัวอักษร ตัวเลข และ _'),
  email: z.string()
    .email('รูปแบบ email ไม่ถูกต้อง'),
  password: z.string()
    .min(6, 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'รหัสผ่านต้องมีตัวอักษรเล็ก ใหญ่ และตัวเลข'),
  confirmPassword: z.string(),
  acceptTerms: z.boolean().refine(val => val === true, 'กรุณายอมรับข้อตกลงและเงื่อนไขการใช้งาน'),
}).refine(data => data.password === data.confirmPassword, {
  message: 'รหัสผ่านไม่ตรงกัน',
  path: ['confirmPassword'],
});

// Forgot Password Schema
export const forgotPasswordSchema = z.object({
  email: z.string()
    .email('รูปแบบ email ไม่ถูกต้อง'),
});

// OTP Verification Schema
export const otpSchema = z.object({
  otp: z.string()
    .length(6, 'รหัส OTP ต้องมี 6 หลัก')
    .regex(/^\d+$/, 'รหัส OTP ต้องเป็นตัวเลขเท่านั้น'),
});

// Reset Password Schema
export const resetPasswordSchema = z.object({
  password: z.string()
    .min(6, 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'รหัสผ่านต้องมีตัวอักษรเล็ก ใหญ่ และตัวเลข'),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: 'รหัสผ่านไม่ตรงกัน',
  path: ['confirmPassword'],
});

// Type exports
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
export type OtpFormData = z.infer<typeof otpSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
