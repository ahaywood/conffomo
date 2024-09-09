import { useEffect, useRef, useState } from 'react'

import {
  Form,
  Label,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import Footer from 'src/components/Footer/Footer'

const ResetPasswordPage = ({ resetToken }: { resetToken: string }) => {
  const { isAuthenticated, reauthenticate, validateResetToken, resetPassword } =
    useAuth()
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  useEffect(() => {
    const validateToken = async () => {
      const response = await validateResetToken(resetToken)
      if (response.error) {
        setEnabled(false)
        toast.error(response.error)
      } else {
        setEnabled(true)
      }
    }
    validateToken()
  }, [resetToken, validateResetToken])

  const passwordRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    passwordRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await resetPassword({
      resetToken,
      password: data.password,
    })

    if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Password changed!')
      await reauthenticate()
      navigate(routes.login())
    }
  }

  return (
    <>
      <Metadata title="Reset Password" />

      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

      <div className="feature-reset" />

      <h1 className="page-title z-content relative col-span-12 pt-[60px]">
        Password
        <br />
        Reset
      </h1>

      <main className="col-span-5">
        <Form onSubmit={onSubmit} className="auth-form">
          <div className="field">
            <Label name="password" errorClassName="error">
              New Password
            </Label>
            <PasswordField
              name="password"
              autoComplete="new-password"
              errorClassName="error"
              disabled={!enabled}
              ref={passwordRef}
              validation={{
                required: {
                  value: true,
                  message: 'New Password is required',
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
              autoComplete="new-password"
              errorClassName="error"
              disabled={!enabled}
              validation={{
                required: {
                  value: true,
                  message: 'Confirm Password is required',
                },
              }}
            />

            <FieldError name="confirmPassword" className="error" />
          </div>

          <Submit className="button primary large mb-10" disabled={!enabled}>
            Submit
          </Submit>
        </Form>
        <Footer />
      </main>
    </>
  )
}

export default ResetPasswordPage
