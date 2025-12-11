export const FILTER = {
  All: 'all',
  Frontend: 'frontend',
  Backend: 'backend',
  Other: 'other',
  Followed: 'followed',
} as const

export type FilterType = (typeof FILTER)[keyof typeof FILTER]
