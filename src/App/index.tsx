import styles from './style.module.css'
import useJobs from '../hooks/useJobs'
import Job from '../components/Job'
import FilterJob from '../components/FilterJob'
import Search from '../components/Search'

export default function App() {
  const { toggleFollowed, setSearchTerm, filter, setFilter, filterJobs } =
    useJobs()

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Job board 職缺報報</h1>
      <Search setSearchTerm={setSearchTerm} />
      <FilterJob filter={filter} setFilter={setFilter} />
      {filterJobs.map((job) => (
        <Job key={job.id} job={job} toggleFollowed={toggleFollowed} />
      ))}
    </div>
  )
}
