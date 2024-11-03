import TaskComponent from "./task/taskComponent";
import initialTasks from "./data/initialTasks";
import { useReducer, useState } from "react";
import {TaskContext} from './context'
import taskReducer from "./reducer/taskReducer";



export default function App(){
  const [taskToEdit,setTaskToEdit] = useState(null)
  const [task,dispatch] = useReducer(taskReducer,initialTasks())


const providerValue = {
  task:task,
  dispatch:dispatch,
  taskToEdit:taskToEdit,
  setTaskToEdit:setTaskToEdit
}
  return (
    <TaskContext.Provider value={providerValue}>
    <TaskComponent />
  </TaskContext.Provider>
  )
}





