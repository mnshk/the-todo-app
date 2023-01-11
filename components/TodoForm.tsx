import React from 'react'
import Task from './Task'


export default function TodoForm({ task, addTask, setTask, input_field }: { task: Task, addTask: any, setTask: any, input_field: any }) {
    return (
        <div>
            <form className="flex p-5 max-w-xl mx-auto" onSubmit={(e) => { addTask(e); }} >
                <input ref={input_field} placeholder="Start typing..." value={task.task} onChange={(e) => { setTask((prev: any) => ({ ...prev, task: e.target.value })) }} type="text" className='flex-grow w-full mr-2 rounded-lg text-white border-slate-700 bg-slate-800 p-3 text-md font-inter font-semibold outline-none focus:border-orange-600 border-2 transition-all' />
                {/* <textarea rows={1} ref={input_field} placeholder="Start typing..." value={task.task} onChange={(e) => { setTask((prev: any) => ({ ...prev, task: e.target.value })) }} className='flex-grow w-full mr-2 rounded-lg text-white border-slate-700 bg-slate-800 p-3 text-md font-inter font-semibold outline-none focus:border-orange-600 border-2 transition-all' /> */}
                <button type="submit" className='bg-teal-400 text-black drop-shadow-lg active:scale-95 transition-all py-2 px-5 rounded-lg flex-shrink-0 font-inter font-bold'>Add</button>
            </form>
        </div>
    )
}
