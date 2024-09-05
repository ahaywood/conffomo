import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const OnboardingPage = () => {
  return (
    <>
      <Metadata title="Onboarding" description="Onboarding page" />

      <h1>OnboardingPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/OnboardingPage/OnboardingPage.tsx</code>
      </p>
      <p>
        My default route is named <code>onboarding</code>, link to me with `
        <Link to={routes.onboarding()}>Onboarding</Link>`
      </p>
    </>
  )
}

export default OnboardingPage
