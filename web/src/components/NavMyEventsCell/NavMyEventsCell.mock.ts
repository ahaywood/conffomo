// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  navMyEvents: [
    {
      __typename: 'NavMyEvents' as const,
      id: 42,
    },
    {
      __typename: 'NavMyEvents' as const,
      id: 43,
    },
    {
      __typename: 'NavMyEvents' as const,
      id: 44,
    },
  ],
})
