"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Mail, Send } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { forgotPasswordSchema, ForgotPasswordFormData } from "@/lib/auth-schemas";
import { AuthService } from "@/lib/auth-service";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);
    try {
      await AuthService.forgotPassword(data);
      setIsSuccess(true);
    } catch (error) {
      setError('root', {
        message: error instanceof Error ? error.message : 'เกิดข้อผิดพลาด'
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-purple-50/30 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8">
          {/* Success State */}
          <div className="text-center">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                <Send className="text-white text-2xl" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">ส่งลิงก์แล้ว!</h1>
              <p className="text-muted-foreground mt-2">
                เราได้ส่งลิงก์รีเซ็ตรหัสผ่านไปยัง
              </p>
              <p className="text-foreground font-medium">{getValues('email')}</p>
            </div>
          </div>

          <div className="bg-background border border-border rounded-2xl p-8 shadow-lg">
            <div className="text-center space-y-4">
              <div className="text-sm text-muted-foreground">
                กรุณาตรวจสอบกล่องข้อความของคุณและคลิกลิงก์เพื่อรีเซ็ตรหัสผ่าน
              </div>
              
              <div className="space-y-3">
                <Button
                  onClick={() => setIsSuccess(false)}
                  variant="outline"
                  className="w-full"
                >
                  ส่งอีเมลใหม่
                </Button>
                
                <Link href="/login">
                  <Button className="w-full">
                    กลับไปเข้าสู่ระบบ
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
            <p className="font-medium text-blue-900 mb-2">💡 เคล็ดลับ:</p>
            <p className="text-blue-800">
              หากไม่พบอีเมล ให้ตรวจสอบในกล่องจดหมายขยะ (Spam)<br />
              ลิงก์จะหมดอายุภายใน 24 ชั่วโมง
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-purple-50/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link
            href="/login"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            กลับไปเข้าสู่ระบบ
          </Link>
          
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-4">
              <Mail className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">ลืมรหัสผ่าน?</h1>
            <p className="text-muted-foreground mt-2">
              ไม่ต้องกังวล เราจะส่งลิงก์รีเซ็ตรหัสผ่านให้คุณ
            </p>
          </div>
        </div>

        {/* Forgot Password Form */}
        <div className="bg-background border border-border rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Error Message */}
            {errors.root && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {errors.root.message}
              </div>
            )}

            {/* Email Field */}
            <Input
              {...register("email")}
              type="email"
              label="อีเมลที่ใช้สมัครสมาชิก"
              placeholder="กรอกอีเมลของคุณ"
              icon={<Mail className="h-5 w-5" />}
              iconPosition="left"
              error={errors.email?.message}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
              size="lg"
            >
              {isLoading ? "กำลังส่ง..." : "ส่งลิงก์รีเซ็ตรหัสผ่าน"}
            </Button>
          </form>

          {/* Back to Login */}
          <div className="text-center mt-6 pt-6 border-t border-border">
            <p className="text-muted-foreground">
              จำรหัสผ่านได้แล้ว?{" "}
              <Link
                href="/login"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                เข้าสู่ระบบ
              </Link>
            </p>
          </div>
        </div>

        {/* Help */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
          <p className="font-medium text-gray-900 mb-2">🔒 ความปลอดภัย:</p>
          <p className="text-gray-700">
            ลิงก์รีเซ็ตรหัสผ่านจะถูกส่งไปยังอีเมลที่ลงทะเบียนไว้เท่านั้น<br />
            ลิงก์จะหมดอายุภายใน 24 ชั่วโมงเพื่อความปลอดภัย
          </p>
        </div>
      </div>
    </div>
  );
}
