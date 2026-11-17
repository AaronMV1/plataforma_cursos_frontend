

import React from 'react'
import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-4xl font-bold">Welcome Back!</h1>
      <p className="text-lg text-gray-600">Sign in to continue to your account</p>
      <SignIn/>
    </div>
  )
}
