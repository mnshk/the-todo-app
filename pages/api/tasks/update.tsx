import Task from "./Task"
import dbConnect from "../../../utils/db"

export default async (req: any, res: any) => {

    const { method } = req
    const { id } = req.query

    await dbConnect();

    if (method == "OPTIONS") {
        res.status(405).json({ message: "Method not supported" })
    }

    if (method == "PUT") {
        try {
            const result = await Task.findByIdAndUpdate(id, { $set: req.body }, { new: true });
            res.status(200).json({ data: result, message: "Task Updated." })
        }
        catch (error) {
            res.status(500).json({ message: "Internal Server Error." });
            console.log(error)
        }
    }
    if (method == "DELETE") {
        try {
            await Task.findByIdAndDelete(id);
            res.status(200).json({ message: "Task Deleted." })
        }
        catch (error) {
            res.status(500).json({ message: "Internal Server Error." });
            console.log(error)
        }
    }
}