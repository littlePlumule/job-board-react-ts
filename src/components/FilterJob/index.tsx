import { FILTER } from '../../type/filter'
import styles from './style.module.css'
import type { FilterJobProps } from './types'

export default function FilterJob({ filter, setFilter }: FilterJobProps) {
  const filterMap = [
    FILTER.All,
    FILTER.Frontend,
    FILTER.Backend,
    FILTER.Other,
    FILTER.Followed,
  ]
  return (
    <div className={styles.filterWrapper}>
      {filterMap.map((item) => (
        <button
          className={`${styles.filterButton} ${
            filter === item ? styles.active : ''
          }`}
          key={item}
          onClick={() => setFilter(item)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
