import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { username, email, password } = await request.json();

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Mock validation - check if username/email already exists
    const existingUsers = ['admin', 'test', 'user'];
    const existingEmails = ['admin@example.com', 'test@example.com'];

    if (existingUsers.includes(username)) {
      return NextResponse.json(
        { success: false, message: 'ชื่อผู้ใช้นี้ถูกใช้งานแล้ว' },
        { status: 409 }
      );
    }

    if (existingEmails.includes(email)) {
      return NextResponse.json(
        { success: false, message: 'อีเมลนี้ถูกใช้งานแล้ว' },
        { status: 409 }
      );
    }

    // Mock successful registration
    return NextResponse.json({
      success: true,
      message: 'ส่งรหัส OTP ไปยังอีเมลของคุณแล้ว กรุณาตรวจสอบกล่องข้อความ',
      email
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์' },
      { status: 500 }
    );
  }
}
