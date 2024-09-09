import { useEffect, useRef } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import Footer from 'src/components/Footer/Footer'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      username: data.username,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <Metadata title="Login" />

      <div className="z-feature relative col-span-6 mb-5 mr-12 border-r-1 border-black">
        <img src="/images/feature__login.png" alt="" />
      </div>

      <main className="col-span-4 col-start-7">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <h1 className="page-title">Login</h1>
        <Form onSubmit={onSubmit} className="auth-form">
          <div className="field">
            <Label name="username" className="" errorClassName="error">
              Username
            </Label>
            <TextField
              name="username"
              className=""
              errorClassName="error"
              ref={usernameRef}
              validation={{
                required: {
                  value: true,
                  message: 'Username is required',
                },
              }}
            />
            <FieldError name="username" className="rw-field-error" />
          </div>

          <div className="field">
            <div className="flex items-center justify-between">
              <Label
                name="password"
                className="rw-label"
                errorClassName="rw-label rw-label-error"
              >
                Password
              </Label>
              <Link
                to={routes.forgotPassword()}
                className="font-bold underline hover:text-veryLightBlue"
              >
                Forgot?
              </Link>
            </div>
            <PasswordField
              name="password"
              className="rw-input"
              errorClassName="rw-input rw-input-error"
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

          <div className="rw-button-group">
            <Submit className="button primary large">Login</Submit>
          </div>
        </Form>
        <div className="mt-10 text-center">
          <span>Don&apos;t have an account?</span>{' '}
          <Link
            to={routes.signup()}
            className="underline hover:text-veryLightBlue"
          >
            Sign up!
          </Link>
        </div>
      </main>
      <div className="col-span-12 text-center">
        <Footer />
      </div>
    </>
  )
}

export default LoginPage
