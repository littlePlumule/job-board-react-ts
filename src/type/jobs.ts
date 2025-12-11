import type { Dispatch, SetStateAction } from 'react'
import type { FilterType } from './filter'

export interface Job {
  id: number
  title: string
  content: string
  salary: string
  link: string
  followed: boolean
}

export interface UseJobsReturn {
  jobs: Job[]
  setJobs: Dispatch<SetStateAction<Job[]>>
  toggleFollowed: (id: number) => void
  searchTerm: string
  setSearchTerm: Dispatch<SetStateAction<string>>
  filter: FilterType
  setFilter: Dispatch<SetStateAction<FilterType>>
  filterJobs: Job[]
}
