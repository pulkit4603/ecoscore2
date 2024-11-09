import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'

export default function LogIn() {
  return (
    <header>
      <SignedOut
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
        transferable={true}
      >
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}