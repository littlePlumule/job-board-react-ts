import styles from './style.module.css'
import type { FilterJobProps, FilterType } from '../../type/filter'

export default function FilterJob({ filter, setFilter }: FilterJobProps) {
  const filterMap: FilterType[] = [
    'all',
    'frontend',
    'backend',
    'other',
    'followed',
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
