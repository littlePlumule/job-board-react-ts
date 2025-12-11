import type { Dispatch, SetStateAction } from 'react'
import type { FilterType } from '../../type/filter'

export interface FilterJobProps {
  filter: FilterType
  setFilter: Dispatch<SetStateAction<FilterType>>
}
