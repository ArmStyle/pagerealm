"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, Mail, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { otpSchema, OtpFormData } from "@/lib/auth-schemas";
import { AuthService } from "@/lib/auth-service";
import { useUserStore } from "@/store/useUserStore";
import { Button } from "@/components/ui/Button";

function VerifyOtpContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';
  const { setUser } = useUserStore();
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    watch
  } = useForm<OtpFormData>({
    resolver: zodResolver(otpSchema),
  });

  // Countdown timer for resend OTP
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  // Handle OTP input changes
  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const otpArray = watch("otp")?.split("") || ["", "", "", "", "", ""];
      otpArray[index] = value;
      setValue("otp", otpArray.join(""));

      // Auto-focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  // Handle backspace
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !watch("otp")?.[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onSubmit = async (data: OtpFormData) => {
    setIsLoading(true);
    try {
      const response = await AuthService.verifyOtp(email, data.otp);
      setUser(response.user);
      localStorage.setItem('auth-token', response.token);
      router.push('/');
    } catch (error) {
      setError('root', {
        message: error instanceof Error ? error.message : 'เกิดข้อผิดพลาด'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!canResend) return;
    
    try {
      await AuthService.forgotPassword({ email });
      setCanResend(false);
      setCountdown(60);
    } catch (error) {
      setError('root', {
        message: 'ไม่สามารถส่งรหัส OTP ใหม่ได้'
      });
    }
  };

  if (!email) {
    router.push('/register');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-purple-50/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link
            href="/register"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            กลับไปสมัครสมาชิก
          </Link>
          
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4">
              <Mail className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">ยืนยันอีเมล</h1>
            <p className="text-muted-foreground mt-2">
              เราได้ส่งรหัส OTP 6 หลักไปยัง
            </p>
            <p className="text-foreground font-medium">{email}</p>
          </div>
        </div>

        {/* OTP Form */}
        <div className="bg-background border border-border rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Error Message */}
            {errors.root && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {errors.root.message}
              </div>
            )}

            {/* OTP Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground text-center">
                กรอกรหัส OTP
              </label>
              <div className="flex justify-center space-x-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    maxLength={1}
                    className="w-12 h-12 text-center text-lg font-semibold border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    value={watch("otp")?.[index] || ""}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                  />
                ))}
              </div>
              <input
                {...register("otp")}
                type="hidden"
              />
              {errors.otp && (
                <p className="text-red-600 text-sm text-center">{errors.otp.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading || !watch("otp") || watch("otp").length !== 6}
              className="w-full"
              size="lg"
            >
              {isLoading ? "กำลังยืนยัน..." : "ยืนยันและสมัครสมาชิก"}
            </Button>

            {/* Resend OTP */}
            <div className="text-center">
              {canResend ? (
                <button
                  type="button"
                  onClick={handleResendOtp}
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  ส่งรหัส OTP ใหม่
                </button>
              ) : (
                <p className="text-sm text-muted-foreground">
                  ส่งรหัสใหม่ได้ในอีก {countdown} วินาที
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Demo OTP */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm">
          <p className="font-medium text-yellow-900 mb-2">💡 สำหรับทดสอบ:</p>
          <p className="text-yellow-800">
            ใช้รหัส OTP: <strong>123456</strong>
          </p>
        </div>

        {/* Help */}
        <div className="text-center text-sm text-muted-foreground">
          ไม่ได้รับอีเมล?{" "}
          <Link href="/register" className="text-primary hover:text-primary/80">
            ตรวจสอบกล่องจดหมายขยะ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function VerifyOtpPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyOtpContent />
    </Suspense>
  );
}
