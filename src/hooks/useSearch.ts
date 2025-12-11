import {
  useState,
  type ChangeEvent,
  type Dispatch,
  type FormEvent,
  type SetStateAction,
} from 'react'
import type { UseSearchReturn } from '../type/search'

export default function useSearch(
  setSearchTerm: Dispatch<SetStateAction<string>>
): UseSearchReturn {
  const [value, setValue] = useState<string>('')
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchTerm(value)
  }

  return { value, setValue, handleInput, handleSubmit }
}
