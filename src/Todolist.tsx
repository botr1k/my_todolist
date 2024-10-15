import {TaskPropsType} from "./App.tsx";
import {Button} from "./Button.tsx";

type Props = {
    title: string
    tasks: TaskPropsType[]
    removeTask: (taskId: number) => void
};

export const Todolist = ({title, tasks, removeTask}: Props) => {
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
                <Button name={'All'}/>
                <Button name={'Active'}/>
                <Button name={'Completed'}/>
            </div>
        </div>
    );
};