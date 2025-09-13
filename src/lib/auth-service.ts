import { User } from '@/store/useUserStore';
import { LoginFormData, RegisterFormData, ForgotPasswordFormData } from './auth-schemas';

// API Response Types
interface AuthResponse {
  user: User;
  token: string;
}

interface MessageResponse {
  message: string;
}

// Mock API responses - ในการใช้งานจริงควรเชื่อมต่อกับ backend API
export class AuthService {
  private static baseUrl = process.env.NEXT_PUBLIC_API_URL || '/api/auth';

  // Login
  static async login(data: LoginFormData): Promise<AuthResponse> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock response - replace with actual API call
    if (data.identifier === 'demo@example.com' && data.password === 'password123') {
      return {
        user: {
          id: '1',
          username: 'demo_user',
          email: 'demo@example.com',
          profile_name: 'Demo User',
          profile_picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo'
        },
        token: 'mock-jwt-token'
      };
    }
    
    throw new Error('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
  }

  // Register
  static async register(data: RegisterFormData): Promise<MessageResponse> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock validation - check if username/email already exists
    if (data.username === 'admin' || data.email === 'admin@example.com') {
      throw new Error('ชื่อผู้ใช้หรืออีเมลนี้ถูกใช้แล้ว');
    }
    
    // Mock response
    return {
      message: 'ส่งรหัส OTP ไปยังอีเมลของคุณแล้ว กรุณาตรวจสอบกล่องข้อความ'
    };
  }

  // Verify OTP
  static async verifyOtp(email: string, otp: string): Promise<AuthResponse> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock response - in real app, verify OTP with backend
    if (otp === '123456') {
      return {
        user: {
          id: '2',
          username: 'new_user',
          email: email,
          profile_name: 'New User',
          profile_picture: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
        },
        token: 'mock-jwt-token'
      };
    }
    
    throw new Error('รหัส OTP ไม่ถูกต้องหรือหมดอายุ');
  }

  // Forgot Password
  static async forgotPassword(data: ForgotPasswordFormData): Promise<MessageResponse> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      message: 'ส่งลิงก์รีเซ็ตรหัสผ่านไปยังอีเมลของคุณแล้ว กรุณาตรวจสอบกล่องข้อความ'
    };
  }

  // Reset Password
  static async resetPassword(token: string, password: string): Promise<MessageResponse> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      message: 'รีเซ็ตรหัสผ่านสำเร็จ กรุณาเข้าสู่ระบบด้วยรหัสผ่านใหม่'
    };
  }

  // Google Login
  static async loginWithGoogle(): Promise<AuthResponse> {
    // In real app, integrate with Google OAuth
    throw new Error('Google Login ยังไม่พร้อมใช้งาน กรุณาใช้ email/password');
  }

  // Logout
  static async logout(): Promise<void> {
    // Clear tokens, etc.
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user-storage');
  }

  // Get current user profile
  static async getCurrentUser(): Promise<User> {
    const token = localStorage.getItem('auth-token');
    if (!token) {
      throw new Error('ไม่พบ token การเข้าสู่ระบบ');
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock response
    return {
      id: '1',
      username: 'demo_user',
      email: 'demo@example.com',
      profile_name: 'Demo User',
      profile_picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo'
    };
  }

  // Update profile
  static async updateProfile(updates: Partial<Pick<User, 'profile_name' | 'username'>>): Promise<User> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock response - merge with current user data
    const currentUser = await this.getCurrentUser();
    return {
      ...currentUser,
      ...updates
    };
  }
}
