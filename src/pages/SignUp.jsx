import { SignUp as ClerkSignUp } from "@clerk/clerk-react";

export default function SignUp() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <ClerkSignUp redirectUrl="/dashboard" signInUrl="/sign-in" />
    </div>
  );
}
