import React, { useEffect } from 'react'
import { FiTrash, FiEdit, FiLink } from 'react-icons/fi'
import { MdOutlineCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'
import Task from './Task'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Scrollbar from 'smooth-scrollbar'


const options = {
    damping: 0.07
}

export default function Todos({ tasks, deleteTask, modifyTask, modifyTaskStatus }: { tasks: Task[], deleteTask: any, modifyTask: any, modifyTaskStatus: any }) {

    useEffect(() => {
        // Scrollbar.init(document.body, options);
    }, [])

    return (
        <div className="w-full flex flex-col flex-grow">
            {
                tasks.length ?
                    (
                        <>
                            <div className="p-20"></div>
                            <div className="p-5 px-2 grid gap-1 md:gap-2 lg:gap-3 md:grid-cols-2 max-w-screen-lg w-full mx-auto">
                                {
                                    tasks.map((task: Task) => {
                                        return (
                                            <div key={task._id} className={`${task.completed ? "border-teal-400" : "border-slate-900"} border items-start active:border-orange-600 transition-all flex p-4 rounded-lg m-1 bg-slate-800 drop-shadow-md overflow-auto`}>
                                                <div className="flex text-3xl my-2 mr-4" onClick={() => { modifyTaskStatus(!task.completed, task._id); }}>
                                                    {
                                                        task.completed ?
                                                            <MdCheckBox className='text-teal-400 cursor-pointer' />
                                                            :
                                                            <MdOutlineCheckBoxOutlineBlank className='text-slate-600 cursor-pointer' />
                                                    }
                                                </div>
                                                <div className="text-sm font-normal flex-grow flex items-center h-full overflow-auto" style={{ wordBreak: "break-all" }}>
                                                    {task.task}
                                                </div>
                                                <div className="flex text-xl my-3 ml-3">
                                                    <FiEdit className='mr-3 text-slate-500 active:text-teal-400 cursor-pointer' onClick={() => { modifyTask(task._id) }} />
                                                    <FiTrash className='text-slate-500 active:text-orange-600 cursor-pointer' onClick={() => { deleteTask(task._id) }} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
                    :
                    (
                        <>
                            <div className="p-40"></div>
                            <div className="flex h-full w-full justify-center items-center">
                                <div className=' text-lg font-bold text-slate-600'>No Tasks Yet!</div>
                            </div>
                        </>
                    )
            }
        </div>
    )
}
