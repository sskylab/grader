'use client'

import { useMemo, useState } from 'react'

import { useSearchParams } from 'next/navigation'

import { IGeneralTask } from '@/types/tasks'

import List from './All'

interface ITab {
  condition: (_task: IGeneralTask) => boolean
  value: string | null
}

const Tabs: ITab[] = [
  {
    condition: () => true,
    value: null
  },
  {
    condition: (task: IGeneralTask) =>
      task.tried && task.score !== task.fullScore,
    value: 'tried'
  },
  {
    condition: (task: IGeneralTask) => task.score === task.fullScore,
    value: 'solved'
  },
  {
    condition: () => true,
    value: 'archives'
  },
  {
    condition: (task: IGeneralTask) => task.bookmarked,
    value: 'bookmarked'
  }
]

export const TasksList = ({ tasks }: { tasks: IGeneralTask[] }) => {
  const searchParams = useSearchParams()
  const type = searchParams?.get('type')

  const [tag, setTag] = useState<boolean>(false)

  const condition = useMemo<(_task: IGeneralTask) => boolean>(
    () =>
      Tabs.find(
        tab =>
          (type === undefined && tab.value === null) ||
          tab.value === String(type)
      )?.condition || (() => true),
    [type]
  )

  const filteredTask = useMemo(
    () => tasks.filter(condition),
    [tasks, condition]
  )

  return <List tasks={filteredTask} tag={tag} setTag={setTag} />
}
