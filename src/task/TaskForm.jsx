
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../context";

//{onAdd,taskToEdit,onUpdate}

function TaskForm(){
    const [text,setText] = useState('')

    const {dispatch,taskToEdit,setTaskToEdit} = useContext(TaskContext)


    useEffect(()=>{
        if(taskToEdit){
            setText(taskToEdit.text)
        }
  
        
    },[taskToEdit])
   

    const handleAdd = () => {
        if (taskToEdit) {
          
          dispatch({
            type:"UPDATED",
            payload:{
                ...taskToEdit,
                text:text
            }
          })  
       
          
            

        } else {
       
            
            dispatch({
                type:'ADDED',
                payload:{
                    id: crypto.randomUUID(),
                     text: text,
                }
            })
        }

        setText('');
    }

    return (
        <div className="space-y-3 col-span-5">
            <h2 className="text-2xl font-semibold">task form</h2>
            <input value={text} onChange={(e)=> setText(e.target.value)} type="text" className="w-full shadow-sm h-[40px]" />
            <button onClick={handleAdd} className="px-3 py-2 rounded-md shadow-sm bg-green-600 text-white font-bold">{taskToEdit ? 'Edit Task' : 'Add Task'}</button>
        </div>
    )
}
export default TaskForm;