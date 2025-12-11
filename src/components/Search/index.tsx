import styles from './style.module.css'
import { CiSearch } from 'react-icons/ci'
import useSearch from '../../hooks/useSearch'
import type { SearchProps } from './types'

export default function Search({ setSearchTerm }: SearchProps) {
  const { value, handleInput, handleSubmit } = useSearch(setSearchTerm)

  return (
    <form className={styles.searchWrapper} onSubmit={handleSubmit}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Please Input Job Name"
        value={value}
        onChange={handleInput}
      />
      <button className={styles.searchButton}>
        <CiSearch className={styles.searchIcon} />
      </button>
    </form>
  )
}
