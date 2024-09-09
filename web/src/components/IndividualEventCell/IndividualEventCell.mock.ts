// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  individualEvent: {
    __typename: 'IndividualEvent' as const,
    id: 42,
  },
})
