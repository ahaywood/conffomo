// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  upcomingEvents: [
    {
      __typename: 'UpcomingEvents' as const,
      id: 42,
    },
    {
      __typename: 'UpcomingEvents' as const,
      id: 43,
    },
    {
      __typename: 'UpcomingEvents' as const,
      id: 44,
    },
  ],
})
