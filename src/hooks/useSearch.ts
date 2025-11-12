import React, { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import type { UseSearchReturn } from '../type/search'

export default function useSearch(
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
): UseSearchReturn {
  const [value, setValue] = useState<string>('')
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchTerm(value)
  }

  return {
    value,
    setValue,
    handleInput,
    handleSubmit,
  }
}
