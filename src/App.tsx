import './App.css'
import {Todolist} from "./Todolist.tsx";
import {useState} from "react";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const [tasks, setTasks] = useState<TaskType[]>([
        { id: 1, title: 'HTML&CSS', isDone: true },
        { id: 2, title: 'JS', isDone: true },
        { id: 3, title: 'ReactJS', isDone: false },
    ])


    return (
        <div className={'App'}>
            <Todolist title={'What to learn'} tasks={tasks}/>
        </div>
    )
}

export default App
