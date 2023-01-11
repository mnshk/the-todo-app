import Task from "./Task"
import dbConnect from "../../../utils/db"

export default async (req :any, res:any) => {

    const { method } = req
    await dbConnect();

    if (method == "OPTIONS") {
        res.status(405).json({ message: "Method not supported" })
    }

    if (method == "POST") {
        try {
            const newTask = await new Task(req.body).save();
            res.status(200).json({ data: newTask, message: "Task Added." })
        }
        catch (error) {
            res.status(500).json({ message: "Internal Server Error." });
            console.log("POST ERROR")
            console.log(error)
        }
    }
    if (method == "GET") {
        try {
            const tasks = await Task.find();
            res.status(200).json({ data: tasks })
        }
        catch (error) {
            res.status(500).json({ message: "Internal Server Error." });
            console.log("GET ERROR")
            console.log(error)
        }
    }
}