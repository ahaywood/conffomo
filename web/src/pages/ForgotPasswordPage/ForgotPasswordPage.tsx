import { useEffect, useRef } from 'react'

import { Form, Label, TextField, Submit, FieldError } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import Footer from 'src/components/Footer/Footer'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef?.current?.focus()
  }, [])

  const onSubmit = async (data: { username: string }) => {
    const response = await forgotPassword(data.username)

    if (response.error) {
      toast.error(response.error)
    } else {
      // The function `forgotPassword.handler` in api/src/functions/auth.js has
      // been invoked, let the user know how to get the link to reset their
      // password (sent in email, perhaps?)
      toast.success(
        'A link to reset your password was sent to ' + response.email
      )
      navigate(routes.login())
    }
  }

  return (
    <>
      <Metadata title="Forgot Password" />

      <div className="feature-forgot" />

      <div className="z-content relative col-span-12 pt-[60px]">
        <h1 className="page-title">
          Forgot my
          <br />
          Password
        </h1>
      </div>

      <main className="z-content relative col-span-5">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

        <Form onSubmit={onSubmit} className="auth-form mb-[200px]">
          <div className="field">
            <Label
              name="username"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Username
            </Label>
            <TextField
              name="username"
              className="rw-input"
              errorClassName="rw-input rw-input-error"
              ref={usernameRef}
              validation={{
                required: {
                  value: true,
                  message: 'Username is required',
                },
              }}
            />

            <FieldError name="username" className="error" />
          </div>

          <Submit className="button primary large">Submit</Submit>
        </Form>
      </main>

      <div className="col-span-12 text-center">
        <Footer />
      </div>
    </>
  )
}

export default ForgotPasswordPage
