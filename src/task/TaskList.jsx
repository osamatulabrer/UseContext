import { useContext } from "react";
import TaskHeader from "./TaskHeader";
import TaskItem from "./TaskItem";
import { TaskContext } from "../context";


function TaskList(){

    const {task} = useContext(TaskContext)
  


return (
    <div className="col-span-7">
    <TaskHeader/>
    <ul>
        {task.map(item => (
           
                <TaskItem key={item.id} item={item} />
            
        ))}
        
    </ul>
    </div>

    )
}

export default TaskList;