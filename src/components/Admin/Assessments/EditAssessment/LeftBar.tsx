import { UseFormRegister } from 'react-hook-form'

import { IAssessment, IAssessmentForm } from './EditAssessment'

export const LeftBar = ({
  register,
  assessment
}: {
  register: UseFormRegister<IAssessmentForm>
  assessment?: IAssessment
}) => {
  return (
    <div className="flex h-full w-full flex-col space-y-3 overflow-y-auto border-r-[1px] border-gray-300 px-6 py-4 dark:border-slate-700">
      <div className="flex flex-col">
        <p>Assessment Name</p>
        <input
          type="text"
          className="rounded-md border px-4 py-1 dark:border-slate-700 dark:bg-slate-800 dark:focus:outline-none"
          {...register('name')}
        />
      </div>
      <div className="flex flex-col">
        <p>ID</p>
        <input
          type="text"
          className="rounded-md border px-4 py-1 dark:border-slate-700 dark:bg-gray-800 dark:focus:outline-none"
          {...register('id')}
          disabled={assessment !== undefined}
        />
      </div>
      <div className="flex flex-col">
        <p>Description</p>
        <textarea
          className="h-28 rounded-md border px-4 py-1 dark:border-slate-700 dark:bg-slate-800 dark:focus:outline-none"
          {...register('description')}
        />
      </div>
      <div className="flex flex-col">
        <p>Instruction</p>
        <textarea
          className="h-28 rounded-md border px-4 py-1 dark:border-slate-700 dark:bg-slate-800 dark:focus:outline-none"
          {...register('instruction')}
        />
      </div>
      <div className="flex flex-col">
        <p>Open At</p>
        <input
          type="datetime-local"
          className="rounded-md border px-4 py-1 dark:border-slate-700 dark:bg-slate-800 dark:focus:outline-none"
          {...register('open')}
        ></input>
      </div>
      <div className="flex flex-col">
        <p>Closed At</p>
        <input
          type="datetime-local"
          className="rounded-md border px-4 py-1 dark:border-slate-700 dark:bg-slate-800 dark:focus:outline-none"
          {...register('close')}
        ></input>
      </div>
      <div className="flex flex-col">
        <p>Assign to</p>
        <div className="flex h-52 flex-col overflow-y-auto rounded-md border border-gray-200 p-0.5 dark:border-slate-800 ">
          <input
            type="text"
            className="rounded-md bg-gray-100 px-4 py-1 dark:bg-slate-800 dark:focus:outline "
            placeholder="Search..."
          ></input>
        </div>
      </div>
      <div className="flex flex-col">
        <p>Assign owner to</p>
        <div className="flex h-52 flex-col overflow-y-auto rounded-md border border-gray-200 p-0.5 dark:border-slate-800 ">
          <input
            type="text"
            className="rounded-md bg-gray-100 px-4 py-1 dark:bg-slate-800 dark:focus:outline"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  )
}
