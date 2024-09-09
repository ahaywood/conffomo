import type {
  FindEditProfileFormQuery,
  FindEditProfileFormQueryVariables,
} from 'types/graphql'

import {
  Form,
  Label,
  TextField,
  TextAreaField,
  Submit,
  FileField,
  HiddenField,
} from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import {
  type CellSuccessProps,
  type CellFailureProps,
  type TypedDocumentNode,
  useMutation,
} from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import Avatar from 'src/components/Avatar'
import Breadcrumbs from 'src/components/Breadcrumbs/Breadcrumbs'

import Icon from '../Icon/Icon'

export const QUERY: TypedDocumentNode<
  FindEditProfileFormQuery,
  FindEditProfileFormQueryVariables
> = gql`
  query FindEditProfileFormQuery($id: Int!) {
    user(id: $id) {
      id
      firstName
      lastName
      avatar
      location
      bio
      avatar
      cover
      website
    }
  }
`

const UPDATE_PROFILE_MUTATION = gql`
  mutation UPDATE_PROFILE_MUTATION($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEditProfileFormQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  user,
}: CellSuccessProps<
  FindEditProfileFormQuery,
  FindEditProfileFormQueryVariables
>) => {
  // SET UP THE APOLLO FUNCTION
  const [updateUser, { loading }] = useMutation(UPDATE_PROFILE_MUTATION, {
    onCompleted: () => {
      toast.success('Profile updated')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    refetchQueries: [QUERY],
  })

  const handleSubmit = (data) => {
    const input = {
      ...data,
      avatar: data.avatar?.[0], // FileField returns an array, we want the first and only file
      cover: data.cover?.[0], // FileField returns an array, we want the first and only file
    }

    updateUser({ variables: { id: user.id, input: input } })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset className="app-form grid grid-cols-9 gap-5" disabled={loading}>
        <div className="col-span-9 px-10">
          <Breadcrumbs label="Feed" link={routes.dashboard()} />

          {/* COVER IMAGE */}
          <div className="relative">
            <div className="h-[250px] w-full bg-veryLightBlue">
              <img
                src={user.cover}
                alt=""
                className="h-full w-full object-cover"
              />

              {/* cover overlay */}
              <div className="absolute inset-0 h-full w-full bg-black bg-opacity-50"></div>

              {/* buttons */}
              <div className="action-buttons center absolute inset-0 z-[100] h-full w-full">
                <Label
                  name="cover"
                  className="!flex h-[54px] w-[54px] cursor-pointer items-center justify-center rounded-full bg-veryLightBlue !text-white"
                >
                  <FileField name="cover" className="hidden" />
                  <Icon id="image" size={32} />
                </Label>
              </div>
            </div>
            <div className="absolute left-6 top-0 flex h-full w-full items-center">
              <div className="relative items-center justify-between">
                <div className="relative flex items-center justify-center">
                  {/* avatar */}
                  <Avatar src={user.avatar} alt="" size={190} />

                  {/* avatar overlay */}
                  <div className="absolute inset-0 h-full w-full rounded-full bg-black bg-opacity-50"></div>

                  {/* buttons */}
                  <div className="absolute inset-0 flex h-full w-full items-center justify-center">
                    <Label
                      name="avatar"
                      className="z-[100] !flex h-[54px] w-[54px] cursor-pointer items-center justify-center rounded-full bg-veryLightBlue !text-white"
                    >
                      <FileField name="avatar" className="hidden" />
                      <Icon id="image" size={32} />
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-6 px-10">
          <h1 className="page-title">My Profile</h1>

          <div className="field">
            <Label name="firstName">First Name</Label>
            <TextField name="firstName" defaultValue={user.firstName} />
          </div>

          <div className="field">
            <Label name="lastName">Last Name</Label>
            <TextField name="lastName" defaultValue={user.lastName} />
          </div>

          <div className="field">
            <Label name="bio">Bio</Label>
            <TextAreaField name="bio" defaultValue={user.bio} />
          </div>

          <div className="field">
            <Label name="location">Location</Label>
            <TextField name="location" defaultValue={user.location} />
          </div>

          <div className="field">
            <Label name="website">Website</Label>
            <TextField name="website" defaultValue={user.website} />
          </div>

          <div className="field flex items-center justify-between">
            <Link to={routes.dashboard()} className="button !px-0 underline">
              Cancel
            </Link>

            <Submit className="button primary solid">Update</Submit>
          </div>
        </div>
      </fieldset>
    </Form>
  )
}
