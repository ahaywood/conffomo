// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  speakingGrid: {
    __typename: 'SpeakingGrid' as const,
    id: 42,
  },
})
