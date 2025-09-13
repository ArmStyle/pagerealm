import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { identifier, password } = await request.json();

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock authentication
    if (identifier === 'demo@example.com' && password === 'password123') {
      const user = {
        id: '1',
        username: 'demo_user',
        email: 'demo@example.com',
        profile_name: 'Demo User',
        profile_picture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo'
      };

      const token = 'mock-jwt-token-' + Date.now();

      return NextResponse.json({
        success: true,
        user,
        token,
        message: 'เข้าสู่ระบบสำเร็จ'
      });
    }

    return NextResponse.json(
      { success: false, message: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์' },
      { status: 500 }
    );
  }
}
