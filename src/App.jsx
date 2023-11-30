import { Header } from './components/Header';
import { TaskList } from './components/TaskList'
import "./app.css";
import { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react'

function App() {

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskArray, setTaskArray] = useState(JSON.parse(localStorage.getItem("taskArrayData")) || [{
    id: 0,
    title: "Mi primer tarea",
    description: "Mi primer descripción"
  }]);

  useEffect(() => {
    localStorage.setItem("taskArrayData", JSON.stringify(taskArray));
    console.log(JSON.parse(localStorage.getItem("taskArrayData")));
  }, [taskArray]);

  const onHandleChangeTitle = (title) => {
    setTaskTitle(title);
  };

  const onHandleChangeDescription = (description) => {
    setTaskDescription(description);
  }

  const onHandleClick = () =>{
    let lastItem=0
    if (taskArray.length > 0){
      lastItem= (taskArray[taskArray.length-1].id) + 1;
    }
    setTaskArray([...taskArray, {id: lastItem, title: taskTitle, description: taskDescription}]);
    setTaskTitle("");
    setTaskDescription("");
  };

  const onHandleDelete = () => {
    setTaskArray([])
  };

  const onHandleEdit = (taskId, taskNewTitle, taskNewDescription) => {
    setTaskArray(taskArray.map((task) => {
      if (task.id == taskId) {
        task.title = taskNewTitle;
        task.description = taskNewDescription;
      };
      return task;
    }));
  };

  const onHandleDeleteTask = (taskId) => {
    const newTaskArray = taskArray.filter(task => task.id !== taskId);
    setTaskArray(newTaskArray);
  };

  return (
    <ChakraProvider>
    <div className='body'>
        <Header name="Lista de tareas" onHandleClick={onHandleClick} onHandleChangeTitle={onHandleChangeTitle} onHandleChangeDescription={onHandleChangeDescription} taskTitle={taskTitle} taskDescription={taskDescription}/>
        <TaskList list={taskArray} onHandleDelete={onHandleDelete} onHandleEdit={onHandleEdit} onHandleDeleteTask={onHandleDeleteTask}/>
    </div>
    </ChakraProvider>
    );
}

export default App