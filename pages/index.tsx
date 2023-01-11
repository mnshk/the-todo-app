import { useEffect, useRef, useState } from 'react';

import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';
import Task from '../components/Task';
import Footer from '../components/Footer';

// const axios = require('axios')
// const API_URL = "http://192.168.1.5:3001/api/tasks"
// export default function Home(props: { tasks: Task[] }) {

const uuid = require("uuid")
const defaultTodos = [
	{
		_id: uuid.v1(),
		task: "Suspendisse pharetra auctor...",
		completed: false
	},
	{
		_id: uuid.v1(),
		task: "Morbi at lorem ut risus bibendum fringilla vitae et arcu.",
		completed: true
	},
	{
		_id: uuid.v1(),
		task: "Pretium, lobortis massa id, scelerisque.",
		completed: false
	},
	{
		_id: uuid.v1(),
		task: "Phasellus eget eleifend diam. In hac habitasse platea dictumst. Phasellus iaculis nibh quis tortor pellentesque dignissim. Vivamus augue quam, posuere a consectetur nec",
		completed: false
	},
	{
		_id: uuid.v1(),
		task: "Cras et nulla imperdiet, sodales urna at, euismod.",
		completed: true
	},
	{
		_id: uuid.v1(),
		task: "Vivamus in malesuada eros, et molestie libero. Suspendisse ullamcorper aliquet felis, eget interdum diam. Aenean tellus.",
		completed: false
	},
	{
		_id: uuid.v1(),
		task: "Pellentesque dictum neque pellentesque felis gravida, sit amet pellentesque.",
		completed: true
	},
]


export default function Home() {

	const [tasks, setTasks] = useState<Task[]>([]);
	const [task, setTask] = useState<Task>({ task: "" })
	const input_field = useRef<any>(null);

	useEffect(() => {
		if (localStorage.getItem("tasks") === null) {
			localStorage.setItem("tasks", JSON.stringify(defaultTodos));
		}
		if (!tasks.length) {
			setTasks(JSON.parse(localStorage.getItem("tasks") || ""));
		}
		else {
			localStorage.setItem("tasks", JSON.stringify(tasks));
		}
	}, [tasks])


	const addTask = async (e: any) => {
		e.preventDefault();
		if (task.task === "") return
		try {
			if (task._id) {
				// const { data } = await axios.put(API_URL + "/update/?id=" + task._id, { task: task.task })
				const oldTasks = [...tasks];
				const index = oldTasks.findIndex((t) => t._id == task._id)
				// oldTasks[index] = data.data
				oldTasks[index] = task;
				setTasks(oldTasks)
				setTask({ task: "" })

			} else {
				// const { data } = await axios.post(API_URL, task)
				setTasks((prev) => [task, ...prev])
				setTask({ task: "" })
			}
		} catch (error: any) {
			console.log(error.code)
		}
	}
	const deleteTask = async (id: string | undefined) => {
		// const { data } = await axios.delete(API_URL + "/update/?id=" + id)
		setTasks((prev) => prev.filter((t) => t._id !== id))
		setTask({ task: "" })
	}
	const modifyTask = async (id: string | undefined) => {
		const currentTask = tasks.filter((t) => t._id === id)
		setTask(currentTask[0])
		input_field.current.focus();
	}
	const modifyTaskStatus = async (value: boolean, id: string | undefined) => {
		const currentTask = tasks.filter((t) => t._id === id)[0]
		try {
			// const { data } = await axios.put(API_URL + "/update/?id=" + id, { task: currentTask.task, completed: value })
			const oldTasks = [...tasks];
			const index = oldTasks.findIndex((t) => t._id == id)
			oldTasks[index].completed = value
			setTasks(oldTasks)
		} catch (error: any) {
			console.log(error.code)
		}
	}

	return (
		<main className="flex flex-col h-screen w-full bg-slate-900 text-white">
			<Header />
			<TodoForm task={task} addTask={addTask} setTask={setTask} input_field={input_field} />
			<div className="overflow-auto flex-grow flex flex-col">
				<Todos tasks={tasks} deleteTask={deleteTask} modifyTask={modifyTask} modifyTaskStatus={modifyTaskStatus} />
				<Footer />
			</div>
		</main>
	)
}



// export const getServerSideProps = async () => {
// 	try {
// 		const { data } = await axios.get(API_URL);
// 		return {
// 			props: {
// 				tasks: data.data
// 			}
// 		}
// 	} catch (error: any) {
// 		console.log(error.code)
// 		return {
// 			props: {
// 				tasks: []
// 			}
// 		}
// 	}
// }
