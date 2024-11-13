import { SignInForm } from '@/src/components/SignInForm/SignInForm';
import { GoogleBtn } from '@/src/uikit/GoogleBtn/GoogleBtn';

export default async function Signin() {
  return (
    <div>
      <h1>SignIn</h1>
      <GoogleBtn />
      <SignInForm />
    </div>
  );
}
