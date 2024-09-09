// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  dashboard: {
    __typename: 'Dashboard' as const,
    id: 42,
  },
})
