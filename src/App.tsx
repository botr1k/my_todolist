import './App.css'
import {Todolist} from "./Todolist.tsx";
import {useState} from "react";

export type TaskPropsType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const [tasks, setTasks] = useState<TaskPropsType[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
    ])

    const removeTask = (taskId: number) => {
        const filteredTask = tasks.filter(task => task.id !== taskId)
        setTasks(filteredTask)
    }


    return (
        <div className={'App'}>
            <Todolist title={'What to learn'}
                      tasks={tasks}
                      removeTask={removeTask}/>
        </div>
    )
}

export default App
