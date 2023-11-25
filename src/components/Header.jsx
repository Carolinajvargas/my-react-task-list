export function Header(props) {
    const { name, onHandleClick, onHandleChangeTitle, onHandleChangeDescription, taskTitle, taskDescription } = props;

    return (
        <>
            <nav>
                <div className="header">
                    <h1>{name}</h1>
                </div>
            </nav>
            <div className="newTask">
                <h3>Nueva tarea:</h3>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    onHandleClick();
                }}>
                    <input placeholder="Título" type="text" onInput={(e) => {
                        onHandleChangeTitle(e.target.value);
                    }} value={taskTitle} />
                    <br />
                    <input placeholder="Descripción" type="text" onInput={(e) => {
                        onHandleChangeDescription(e.target.value);
                    }} value={taskDescription} /><br />
                    <button type="submit">Agregar tarea</button>
                </form>
            </div></>
    );
};