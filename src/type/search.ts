import type { Dispatch, SetStateAction } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

export interface searchProps {
  setSearchTerm: Dispatch<SetStateAction<string>>
}

export interface UseSearchReturn {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}
