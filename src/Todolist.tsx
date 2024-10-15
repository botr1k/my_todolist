import {FilterValuesType, TaskPropsType} from "./App.tsx";
import {Button} from "./Button.tsx";

type Props = {
    title: string
    tasks: TaskPropsType[]
    removeTask: (taskId: number) => void
    changeFilter: (filter: FilterValuesType) => void
};

export const Todolist = ({title, tasks, removeTask, changeFilter}: Props) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    tasks.length === 0
                        ? <p>Список тасок пуст</p>
                        : tasks.map(task => {
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                                <Button name={'x'} onClick={() => removeTask(task.id)}/>
                            </li>
                        )
                    })
                }

            </ul>
            <div>
                <Button name={'All'} onClick={()=> changeFilter('all')}/>
                <Button name={'Active'} onClick={()=> changeFilter('active')}/>
                <Button name={'Completed'} onClick={()=> changeFilter('completed')}/>
            </div>
        </div>
    );
};