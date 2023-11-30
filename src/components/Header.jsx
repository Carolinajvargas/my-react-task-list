import { Button, Input, Stack } from '@chakra-ui/react';

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
                  <Stack spacing={3}>
                    <Input placeholder='Título' size='lg' type='text' onInput={(e) => {
                        onHandleChangeTitle(e.target.value);
                    }} value={taskTitle} />
                    <Input placeholder='Descripción' size='lg' type='text' onInput={(e) => {
                        onHandleChangeDescription(e.target.value);
                    }} value={taskDescription}/>
                    <Button type='submit' colorScheme='orange' size="lg">+</Button>
                  </Stack>
                    
                </form>
            </div></>
    );
};