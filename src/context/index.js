

import { createContext } from "react";


const TaskContext = createContext({
    task:[],
    setTask:()=>{},
    taskToEdit:{},
    setTaskToEdit:()=>{}
})

export {TaskContext};