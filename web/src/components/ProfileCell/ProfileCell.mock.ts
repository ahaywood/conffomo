// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  profile: {
    __typename: 'Profile' as const,
    id: 42,
  },
})
