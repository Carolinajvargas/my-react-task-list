import { Task } from "./Task"

export function TaskList(props) {
    const { list, onHandleDelete, onHandleEdit, onHandleDeleteTask } = props;

    return (
        <div>
            <div className="taskList">
                {list.map((task) => (
                    <div key={task.id}>
                        <Task currentTask={task.title} currentDescription={task.description} currentId={task.id} onHandleEdit={onHandleEdit} onHandleDeleteTask={onHandleDeleteTask} />
                    </div>
                ))}
            </div>
            <div className="pendingClean">
                <label htmlFor="">Tiene {list.length} tareas pendientes </label>
                <button id="cleanAllBttn" onClick={() => onHandleDelete()}>Limpiar tareas</button>
            </div>
        </div>
    );
};