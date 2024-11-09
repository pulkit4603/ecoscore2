import { SignIn } from "@clerk/clerk-react";

export default function LogIn() {
  return <SignIn redirectUrl="/dashboard" />;
}

