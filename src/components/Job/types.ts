import type { Job } from '../../type/jobs'

export interface JobProps {
  job: Job
  toggleFollowed: (id: number) => void
}
