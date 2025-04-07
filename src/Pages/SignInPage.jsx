import { SignIn } from '@clerk/clerk-react';
import React from 'react';

function SignInPage() { // Renamed to SignInPage for clarity
  return (
    <div className='w-full h-screen flex justify-center items-center bg-slate-300'>
      <SignIn />
    </div>
  );
}

export default SignInPage;
