import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center py-24">
      <SignUp path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
      redirectUrl="/new-user"
      afterSignUpUrl="/new-user"  />
    </div>
  );
}