"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, User, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { registerSchema, RegisterFormData } from "@/lib/auth-schemas";
import { AuthService } from "@/lib/auth-service";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    try {
      const response = await AuthService.register(data);
      // Redirect to OTP verification page with email
      router.push(`/verify-otp?email=${encodeURIComponent(data.email)}`);
    } catch (error) {
      setError('root', {
        message: error instanceof Error ? error.message : 'เกิดข้อผิดพลาด'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-purple-50/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            กลับหน้าหลัก
          </Link>
          
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-white text-2xl font-bold">RT</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground">สมัครสมาชิก</h1>
            <p className="text-muted-foreground mt-2">สร้างบัญชีใหม่เพื่อเริ่มต้นการอ่าน</p>
          </div>
        </div>

        {/* Register Form */}
        <div className="bg-background border border-border rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            {/* Error Message */}
            {errors.root && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {errors.root.message}
              </div>
            )}

            {/* Username Field */}
            <Input
              {...register("username")}
              label="ชื่อผู้ใช้"
              placeholder="กรอกชื่อผู้ใช้"
              icon={<User className="h-5 w-5" />}
              iconPosition="left"
              error={errors.username?.message}
            />

            {/* Email Field */}
            <Input
              {...register("email")}
              type="email"
              label="อีเมล"
              placeholder="กรอกอีเมล"
              icon={<Mail className="h-5 w-5" />}
              iconPosition="left"
              error={errors.email?.message}
            />

            {/* Password Field */}
            <Input
              {...register("password")}
              type="password"
              label="รหัสผ่าน"
              placeholder="กรอกรหัสผ่าน"
              icon={<Lock className="h-5 w-5" />}
              iconPosition="left"
              error={errors.password?.message}
            />

            {/* Confirm Password Field */}
            <Input
              {...register("confirmPassword")}
              type="password"
              label="ยืนยันรหัสผ่าน"
              placeholder="กรอกรหัสผ่าน"
              icon={<Lock className="h-5 w-5" />}
              iconPosition="left"
              error={errors.confirmPassword?.message}
            />

            {/* Terms and Conditions */}
            <div className="space-y-2">
              <div className="flex items-start space-x-3">
                <div className="relative">
                  <input
                    {...register("acceptTerms")}
                    type="checkbox"
                    className="sr-only"
                    id="acceptTerms"
                  />
                  <label
                    htmlFor="acceptTerms"
                    className="flex items-center cursor-pointer"
                  >
                    <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                      watch("acceptTerms") 
                        ? "bg-primary border-primary text-white" 
                        : "border-border bg-background"
                    }`}>
                      {watch("acceptTerms") && <Check className="w-3 h-3" />}
                    </div>
                  </label>
                </div>
                <label htmlFor="acceptTerms" className="text-sm text-foreground cursor-pointer">
                  ฉันยอมรับ{" "}
                  <Link href="/terms" className="text-primary hover:text-primary/80 underline">
                    ข้อตกลงและเงื่อนไขการใช้งาน
                  </Link>{" "}
                  และ{" "}
                  <Link href="/privacy" className="text-primary hover:text-primary/80 underline">
                    นโยบายความเป็นส่วนตัว
                  </Link>
                </label>
              </div>
              {errors.acceptTerms && (
                <p className="text-red-600 text-sm">{errors.acceptTerms.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
              size="lg"
            >
              {isLoading ? "กำลังสมัครสมาชิก..." : "สมัครสมาชิก"}
            </Button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6 pt-6 border-t border-border">
            <p className="text-muted-foreground">
              มีบัญชีอยู่แล้ว?{" "}
              <Link
                href="/login"
                className="text-primary hover:text-primary/80 font-medium transition-colors"
              >
                เข้าสู่ระบบ
              </Link>
            </p>
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm">
          <p className="font-medium text-green-900 mb-2">🔐 ความปลอดภัย:</p>
          <p className="text-green-800">
            ข้อมูลของคุณจะถูกเข้ารหัสและป้องกันอย่างปลอดภัย<br />
            เราจะส่งรหัส OTP เพื่อยืนยันอีเมลของคุณ
          </p>
        </div>
      </div>
    </div>
  );
}
