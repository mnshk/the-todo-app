import React from 'react'
import { FiTrash, FiEdit, FiLink } from 'react-icons/fi'
import { MdOutlineCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'
import Task from './Task'


export default function Todos({ tasks, deleteTask, modifyTask, modifyTaskStatus }: { tasks: Task[], deleteTask: any, modifyTask: any, modifyTaskStatus: any }) {
    return (
        <div className="w-full flex flex-col flex-grow">
            {
                tasks ?
                    (
                        <div className="p-5 px-2 overflow-auto grid gap-1 md:gap-2 lg:gap-3 md:grid-cols-2 max-w-screen-lg mx-auto">
                            {
                                tasks.map((task: Task) => {
                                    return (
                                        <div key={task._id} className={`${task.completed ? "border-teal-400" : "border-slate-900"} border items-start active:border-orange-600 transition-all flex p-4 rounded-lg m-1 bg-slate-800 drop-shadow-lg`}>
                                            <div className="flex text-3xl my-2 mr-4" onClick={() => { modifyTaskStatus(!task.completed, task._id); }}>
                                                {
                                                    task.completed ?
                                                        <MdCheckBox className='text-teal-400' />
                                                        :
                                                        <MdOutlineCheckBoxOutlineBlank className='text-slate-600' />
                                                }
                                            </div>
                                            <div className="font-inter text-md flex-grow flex items-center h-full">
                                                {task.task}
                                            </div>
                                            <div className="flex text-xl my-3 ml-3">
                                                <FiEdit className='mr-3 text-slate-500' onClick={() => { modifyTask(task._id) }} />
                                                <FiTrash className='text-slate-500' onClick={() => { deleteTask(task._id) }} />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                    :
                    (
                        <div className="flex h-full w-full justify-center items-center">
                            <div className='font-inter text-lg font-bold text-slate-600'>No Tasks Yet!</div>
                        </div>
                    )
            }
        </div>
    )
}
