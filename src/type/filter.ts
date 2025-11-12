import type { Dispatch, SetStateAction } from 'react'

export const FILTER = {
  All: 'all',
  Frontend: 'frontend',
  Backend: 'backend',
  Other: 'other',
  Followed: 'followed',
} as const
export type FilterType = (typeof FILTER)[keyof typeof FILTER]

export interface FilterJobProps {
  filter: FilterType
  setFilter: Dispatch<SetStateAction<FilterType>>
}
