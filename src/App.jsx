import TaskComponent from "./task/taskComponent";
import initialTasks from "./data/initialTasks";
import { useState } from "react";
import {TaskContext} from './context'



export default function App(){
  const [task,setTask] = useState(initialTasks());
  const [taskToEdit,setTaskToEdit] = useState(null)


const providerValue = {
  task:task,
  setTask:setTask,
  taskToEdit:taskToEdit,
  setTaskToEdit:setTaskToEdit
}
  return (
    <TaskContext.Provider value={providerValue}>
    <TaskComponent />
  </TaskContext.Provider>
  )
}





