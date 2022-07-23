import { Task } from '@/types/tasks'
import { StarIcon as StarIconOutline } from '@heroicons/react/outline'
import { DownloadIcon, StarIcon as StarIconSolid } from '@heroicons/react/solid'
import classNames from 'classnames'
import { FC, Fragment, useState } from 'react'
import { Tab } from '@headlessui/react'
import { PieChart } from '../common/PieChart'

const Tabs = [
  {
    label: 'Statement',
    value: 'statement'
  },
  {
    label: 'Submit',
    value: 'submit'
  },
  {
    label: 'Submissions',
    value: 'submissions'
  },
  {
    label: 'My Submissions',
    value: 'mySubmissions'
  },
  {
    label: 'Solution',
    value: 'solution'
  }
]

export const LeftBar: FC<{
  task: Task
}> = props => {
  const { task } = props

  const [buttonPressed, setButtonPressed] = useState(false)

  return (
    <section className="w-90">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <button onClick={() => setButtonPressed(v => !v)}>
            {buttonPressed ? (
              <StarIconSolid className="w-5 h-5 text-gray-400" />
            ) : (
              <StarIconOutline className="w-5 h-5 text-gray-300" />
            )}
          </button>
          <h1 className="font-medium text-lg">{task.title}</h1>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5" />
          <p className="font-light">{task.id}</p>
        </div>
      </div>

      <hr className="my-8" />

      <div className="flex shrink flex-col font-display">
        <Tab.List>
          {Tabs.map(tabItem => {
            return (
              <Tab key={tabItem.value} as={Fragment}>
                {({ selected }) => (
                  <button
                    className={classNames(
                      'flex h-9 w-full items-center justify-center rounded-md transition-colors',
                      selected ? 'bg-gray-100' : 'hover:bg-gray-50'
                    )}
                  >
                    <p className="text-sm text-gray-500">{tabItem.label}</p>
                  </button>
                )}
              </Tab>
            )
          })}
        </Tab.List>
      </div>

      <hr className="my-8" />

      <div className="flex flex-col justify-center items-center">
        <p className="font-light mb-4">Your Score</p>

        <PieChart points={75} />
      </div>

      <hr className="my-8" />

      <div className="flex flex-col justify-center items-center">
        <a
          target="_blank"
          href="https://google.com"
          className="font-light text-center w-full mb-4"
        >
          Report
        </a>
      </div>

      {/* <h2 className="mb-3">Attatchments</h2> */}

      {/* <table className="table-auto border w-full border-gray-300 rounded-md border-collapse">
        <tbody>
          <tr>
            <td className="border-gray-200 border transition-colors hover:bg-slate-50 px-5 py-4 w-full">
              <button className="w-full flex justify-between items-center">
                <p className="">attachmentsfilename...</p>
                <DownloadIcon className="w-5 h-5 text-prog-primary-500" />
              </button>
            </td>
          </tr>
          <tr>
            <td className="border-gray-200 border transition-colors hover:bg-slate-50 px-5 py-4 w-full">
              <button className="w-full flex justify-between items-center">
                <p className="">attachmentsfilename...</p>
                <DownloadIcon className="w-5 h-5 text-prog-primary-500" />
              </button>
            </td>
          </tr>
        </tbody>
      </table> */}
    </section>
  )
}
