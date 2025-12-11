import type { Dispatch, SetStateAction } from 'react'

export interface SearchProps {
  setSearchTerm: Dispatch<SetStateAction<string>>
}
