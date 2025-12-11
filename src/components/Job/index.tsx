import styles from './style.module.css'
import { FaStar } from 'react-icons/fa6'
import type { JobProps } from './types'

export default function Job({ job, toggleFollowed }: JobProps) {
  return (
    <div className={styles.jobWrapper}>
      <FaStar
        className={`${styles.starIcon} ${job.followed ? styles.active : ''}`}
        onClick={() => toggleFollowed(job.id)}
      />
      <h2>{job.title}</h2>
      <p>{job.content}</p>
      <p>{job.salary}</p>
      <a href={job.link}>我要應徵</a>
    </div>
  )
}
