import type {
  FindEditAccountFormQuery,
  FindEditAccountFormQueryVariables,
} from 'types/graphql'

import {
  Form,
  EmailField,
  TextField,
  PasswordField,
  Label,
  Submit,
} from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  FindEditAccountFormQuery,
  FindEditAccountFormQueryVariables
> = gql`
  query FindEditAccountFormQuery($id: Int!) {
    user(id: $id) {
      email
      username
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEditAccountFormQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  user,
}: CellSuccessProps<
  FindEditAccountFormQuery,
  FindEditAccountFormQueryVariables
>) => {
  // TODO: Handle form submission
  const handleSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <Form onSubmit={handleSubmit} className="app-form">
      <div className="field">
        <Label name="email">Email</Label>
        <EmailField name="email" defaultValue={user.email} />
      </div>

      <div className="field">
        <Label name="username">Username</Label>
        <TextField name="username" defaultValue={user.username} />
      </div>

      <div className="field">
        <Label name="password">Password</Label>
        <PasswordField name="password" />
      </div>

      <div className="field">
        <Label name="confirmPassword">Confirm Password</Label>
        <PasswordField name="confirmPassword" />
      </div>

      <div className="flex items-center justify-end">
        <Link to={routes.dashboard()} className="button large underline">
          Cancel
        </Link>
        <Submit className="button primary large">Update</Submit>
      </div>
    </Form>
  )
}
