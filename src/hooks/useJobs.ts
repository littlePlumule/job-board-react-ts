import { useEffect, useState } from 'react'
import type { Job, UseJobsReturn } from '../type/jobs'
import { FILTER, type FilterType } from '../type/filter'

export default function useJobs(): UseJobsReturn {
  const [jobs, setJobs] = useState<Job[]>([])
  const fetchJobs = async () => {
    const fetchJobsUrl = new URL('../mocks/jobs.json', import.meta.url).href
    const res = await fetch(fetchJobsUrl)
    const data: Omit<Job, 'id' | 'followed'>[] = await res.json()
    const jobWithId: Job[] = data.map((job) => ({
      ...job,
      id: Math.random(),
      followed: false,
    }))
    setJobs(jobWithId)
  }
  const toggleFollowed = (id: number) => {
    setJobs(
      jobs.map((job) =>
        job.id === id ? { ...job, followed: !job.followed } : job
      )
    )
  }
  useEffect(() => {
    const saved = localStorage.getItem('jobs')
    if (saved) {
      setJobs(JSON.parse(saved))
    } else {
      fetchJobs()
    }
  }, [])
  useEffect(() => {
    if (jobs.length > 0) {
      localStorage.setItem('jobs', JSON.stringify(jobs))
    }
  }, [jobs])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [filter, setFilter] = useState<FilterType>(FILTER.All)
  const matchKeyword = (job: Job, keyword: string) =>
    job.title.includes(keyword) ||
    job.content.includes(keyword) ||
    job.salary.includes(keyword)
  const filterJobs = jobs
    .filter((job) => {
      if (!searchTerm) return true
      return matchKeyword(job, searchTerm)
    })
    .filter((job) => {
      if (filter === FILTER.Frontend)
        return ['前端', 'frontend'].some((kw) => matchKeyword(job, kw))
      if (filter === FILTER.Backend)
        return ['後端', 'backend'].some((kw) => matchKeyword(job, kw))
      if (filter === FILTER.Other)
        return !['前端', 'frontend', '後端', 'backend'].some((kw) =>
          matchKeyword(job, kw)
        )
      if (filter === FILTER.Followed) return job.followed
      return true
    })

  return {
    jobs,
    setJobs,
    toggleFollowed,
    searchTerm,
    setSearchTerm,
    filter,
    setFilter,
    filterJobs,
  }
}
