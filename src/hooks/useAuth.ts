import { useEffect } from 'react';
import { useUserStore } from '@/store/useUserStore';
import { AuthService } from '@/lib/auth-service';

export const useAuth = () => {
  const { user, isAuthenticated, isLoading, setUser, setLoading, logout } = useUserStore();

  // Check for existing auth token on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('auth-token');
      if (token && !user) {
        setLoading(true);
        try {
          const userData = await AuthService.getCurrentUser();
          setUser(userData);
        } catch (error) {
          // Token is invalid, clear it
          localStorage.removeItem('auth-token');
          logout();
        } finally {
          setLoading(false);
        }
      }
    };

    checkAuth();
  }, [user, setUser, setLoading, logout]);

  const login = async (identifier: string, password: string) => {
    setLoading(true);
    try {
      const response = await AuthService.login({ identifier, password });
      setUser(response.user);
      localStorage.setItem('auth-token', response.token);
      return response;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: { username: string; email: string; password: string; confirmPassword: string; acceptTerms: boolean }) => {
    setLoading(true);
    try {
      const response = await AuthService.register(data);
      return response;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    try {
      await AuthService.logout();
      logout();
    } catch (error) {
      // Even if logout fails, clear local state
      logout();
    }
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout: logoutUser,
  };
};
