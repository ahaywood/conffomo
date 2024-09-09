import {
  FieldError,
  FileField,
  Form,
  Label,
  Submit,
  TextAreaField,
  TextField,
  UrlField,
} from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import Icon from 'src/components/Icon/Icon'

const OnboardingPage = () => {
  return (
    <>
      <Metadata title="Onboarding" description="Onboarding page" />

      <div className="page-grid px-page relative">
        {/* circle */}
        <div className="absolute -top-6 left-[100px] h-[292px] w-[292px] rounded-full bg-[#d9d9d9]" />
        <div className="col-span-12">
          <Link to="/">
            <img
              src="/images/logo.svg"
              alt="CONF FOMO"
              className="z-logo relative w-[179px] pt-12"
            />
          </Link>
        </div>
        <div className="z-feature mr-page relative col-span-6 mt-14 border-r-1 border-black">
          <div className="sticky top-[100px]">
            <img src="/images/feature__onboarding.png" alt="" />
          </div>
        </div>
        <div className="col-span-5 mb-10">
          <h1 className="page-title">Onboarding</h1>

          <Form className="auth-form">
            <div className="field">
              <Label name="avatar" errorClassName="error">
                Avatar
              </Label>
              <div className="drop-zone">
                <div className="flex items-center gap-2 text-2xl font-semibold">
                  <Icon id="upload" size={32} />
                  Upload a File
                </div>
                <div className="text-sm">Recommended: 512 x 512</div>
                <FileField name="avatar" className="hidden" />
              </div>
              <FieldError name="avatar" className="error" />
            </div>

            <div className="field">
              <Label name="cover" errorClassName="error">
                Cover
              </Label>
              <div className="drop-zone">
                <div className="flex items-center gap-2 text-2xl font-semibold">
                  <Icon id="upload" size={32} />
                  Upload a File
                </div>
                <div className="text-sm">Recommended: 512 x 512</div>
                <FileField name="cover" className="hidden" />
              </div>
              <FieldError name="cover" className="error" />
            </div>

            <div className="field">
              <Label name="location">Location</Label>
              <TextField name="location" errorClassName="error" />
              <FieldError name="location" className="error" />
            </div>

            <div className="field">
              <Label name="website">Website</Label>
              <UrlField name="website" errorClassName="error" />
              <FieldError name="website" className="error" />
            </div>

            <div className="field">
              <Label name="bio">Bio</Label>
              <TextAreaField name="bio" errorClassName="error" />
              <FieldError name="bio" className="error" />
            </div>

            <div className="mb-20 flex justify-between">
              <Link
                to={routes.dashboard()}
                className="button large relative top-3 !px-0 underline hover:text-veryLightBlue"
              >
                Skip
              </Link>
              <Submit className="button primary large">Save</Submit>
            </div>
          </Form>

          <Footer />
        </div>
      </div>
    </>
  )
}

export default OnboardingPage
