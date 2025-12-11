import type { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'

export interface UseSearchReturn {
  value: string
  setValue: Dispatch<SetStateAction<string>>
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}
