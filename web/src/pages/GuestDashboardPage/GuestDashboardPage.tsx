import { FileField, Form, Submit } from '@redwoodjs/forms'
import { Metadata, useMutation } from '@redwoodjs/web'

const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      avatar
    }
  }
`

const GuestDashboardPage = () => {
  const [updateUser, { loading }] = useMutation(UPDATE_USER_MUTATION)

  const onSubmit = (data) => {
    console.log({ data })
    const input = {
      ...data,
      avatar: data.avatar?.[0], // FileField returns an array, we want the first and only file
    }

    updateUser({
      variables: {
        id: 1,
        input,
      },
    })
    console.log(data)
  }

  return (
    <>
      <Metadata title="GuestDashboard" description="GuestDashboard page" />

      <h1>GuestDashboardPage</h1>

      <Form onSubmit={onSubmit}>
        <fieldset disabled={loading}>
          <FileField name="avatar" />
          <Submit>Submit</Submit>
        </fieldset>
      </Form>
    </>
  )
}

export default GuestDashboardPage
