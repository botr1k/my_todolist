import './App.css'
import {Todolist} from "./Todolist.tsx";
import {useState} from "react";

export type TaskPropsType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'completed' | 'active'

function App() {
    const [tasks, setTasks] = useState<TaskPropsType[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValuesType>('all')
    let tasksForTodoList = tasks
    if (filter === 'active') {
        tasksForTodoList = tasks.filter(tasks => !tasks.isDone)
    }
    if (filter === 'completed') {
        tasksForTodoList = tasks.filter(tasks => tasks.isDone)
    }

    const removeTask = (taskId: number) => {
        const filteredTask = tasks.filter(task => task.id !== taskId)
        setTasks(filteredTask)
    }

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }


    return (
        <div className={'App'}>
            <Todolist title={'What to learn'}
                      tasks={tasksForTodoList}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    )
}

export default App
