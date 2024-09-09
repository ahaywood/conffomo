import { useEffect, useRef } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
  EmailField,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import Footer from 'src/components/Footer/Footer'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  // focus on username box on page load
  const firstField = useRef<HTMLInputElement>(null)
  useEffect(() => {
    firstField.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    console.log({ data })

    const response = await signUp({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.username,
      username: data.slug,
      password: data.password,
    })

    console.log({ response })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <Metadata title="Signup" />

      <div className="relative z-feature col-span-6 row-span-2 mr-page border-r-1 border-black pt-7">
        <div className="sticky top-[100px]">
          <img src="/images/feature__signup.png" alt="" />
        </div>
      </div>

      <main className="col-span-4 col-start-7">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <h1 className="page-title">Sign up</h1>
        <Form onSubmit={onSubmit} className="auth-form">
          <div className="field">
            <Label name="firstName" errorClassName="error">
              First Name
            </Label>
            <TextField
              name="firstName"
              errorClassName="error"
              ref={firstField}
              validation={{
                required: {
                  value: true,
                  message: 'First Name is required',
                },
              }}
            />
            <FieldError name="firstName" className="error" />
          </div>

          <div className="field">
            <Label name="lastName" errorClassName="error">
              Last Name
            </Label>
            <TextField
              name="lastName"
              errorClassName="error"
              validation={{
                required: {
                  value: true,
                  message: 'Last Name is required',
                },
              }}
            />
            <FieldError name="lastName" className="error" />
          </div>

          <div className="field">
            <Label name="slug" errorClassName="error">
              Username
            </Label>
            <TextField
              name="slug"
              errorClassName="error"
              validation={{
                required: {
                  value: true,
                  message: 'Username is required',
                },
              }}
            />
            <FieldError name="slug" className="error" />
          </div>

          <div className="field">
            <Label name="username" errorClassName="error">
              Email
            </Label>
            <EmailField
              name="username"
              errorClassName="error"
              validation={{
                required: {
                  value: true,
                  message: 'Email is required',
                },
              }}
            />
            <FieldError name="username" className="error" />
          </div>

          <div className="field">
            <Label name="password" errorClassName="error">
              Password
            </Label>
            <PasswordField
              name="password"
              errorClassName="error"
              autoComplete="current-password"
              validation={{
                required: {
                  value: true,
                  message: 'Password is required',
                },
              }}
            />
            <FieldError name="password" className="error" />
          </div>

          <div className="field">
            <Label name="confirmPassword" errorClassName="error">
              Confirm Password
            </Label>
            <PasswordField
              name="confirmPassword"
              errorClassName="error"
              autoComplete="current-password"
              validation={{
                required: {
                  value: true,
                  message: 'Password is required',
                },
              }}
            />
            <FieldError name="confirmPassword" className="error" />
          </div>

          <Submit className="button primary large">Sign Up</Submit>
        </Form>
        <div className="my-10">
          <span>Already have an account?</span>{' '}
          <Link
            to={routes.login()}
            className="underline hover:text-veryLightBlue"
          >
            Log in!
          </Link>
        </div>
      </main>
      <div className="col-span-6 col-start-7 mb-10">
        <Footer />
      </div>
    </>
  )
}

export default SignupPage
