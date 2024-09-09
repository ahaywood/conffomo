// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, PrivateSet } from '@redwoodjs/router'

import { useAuth } from './auth'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import InteriorLayout from './layouts/InteriorLayout/InteriorLayout'
import LegalLayout from './layouts/LegalLayout/LegalLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/about" page={AboutPage} name="about" />
      {/* GUEST FEED - HOME PAGE WHEN THE USER IS NOT LOGGED IN */}
      <Set wrap={InteriorLayout}>
        <Route path="/" page={GuestDashboardPage} name="guestDashboard" />
      </Set>

      {/* AUTH */}
      <Set wrap={AuthLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>

      {/* LEGAL */}
      <Set wrap={LegalLayout} pageTitle="Privacy Policy">
        <Route path="/privacy" page={PrivacyPage} name="privacy" />
      </Set>
      <Set wrap={LegalLayout} pageTitle="Terms & Conditions">
        <Route path="/terms" page={TermsPage} name="terms" />
      </Set>
      <Set wrap={LegalLayout} pageTitle="Disclaimers">
        <Route path="/disclaimers" page={DisclaimersPage} name="disclaimers" />
      </Set>

      {/* PUBLICLY AVAILABLE PAGES */}
      <Route path="/post/{id}" page={IndividualPostPage} name="individualPost" />
      <Route path="/org/{slug}" page={OrgPage} name="org" />
      <Route path="/event/{slug}" page={IndividualEventPage} name="individualEvent" />
      <Route path="/profile/{username}" page={ProfilePage} name="profile" />
      <Route path="/search" page={SearchPage} name="search" />

      {/* PROTECTED PAGES */}
      <PrivateSet unauthenticated="login">
        <Route path="/onboarding" page={OnboardingPage} name="onboarding" />

        <Route path="/privacy/blocked" page={PrivacyBlockedAccountsPage} name="privacyBlockedAccounts" />
        <Route path="/privacy/muted" page={PrivacyMutedAccountsPage} name="privacyMutedAccounts" />
        <Route path="/privacy/dm" page={PrivacyDirectMessagesPage} name="privacyDirectMessages" />

        <Route path="/account/qr-code" page={QrCodePage} name="qrCode" />
        <Route path="/account" page={EditAccountPage} name="editAccount" />
        <Route path="/account/profile" page={EditProfilePage} name="editProfile" />

        <Route path="/bookmarks" page={BookmarksPage} name="bookmarks" />
        <Route path="/messages" page={MessagesPage} name="messages" />
        <Route path="/my-events" page={MyEventsPage} name="myEvents" />
        <Route path="/notifications" page={NotificationsPage} name="notifications" />

        <Set wrap={InteriorLayout}>
          <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        </Set>
      </PrivateSet>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
