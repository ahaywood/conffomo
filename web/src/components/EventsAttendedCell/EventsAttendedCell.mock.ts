// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  eventsAttended: {
    __typename: 'EventsAttended' as const,
    id: 42,
  },
})
