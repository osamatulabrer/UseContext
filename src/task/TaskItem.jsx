


import { useContext } from "react"
import { TaskContext } from "../context"

function TaskItem({item}){
        const {dispatch,setTaskToEdit} = useContext(TaskContext)
    const handleDelete = ()=>{
        const isConfirm = confirm('are you sure want to delete it?')
        if(isConfirm){

            dispatch({
                type:"DELETED",
                payload:item.id,
                
            })

        }
        
    }




    return(
      
            <li className="flex items-center my-2 justify-between b bg-white p-1">
                <span>#</span>
            <p className=" p-2 text-xl rounded max-w-full">{item.text}</p>
          
        <div>

            <button onClick={()=>setTaskToEdit(item)}  className="px-3 py-2 ml-2 rounded-md shadow-sm bg-green-600 text-white font-bold">Edit</button>
            <button onClick={handleDelete} className="px-3 py-2 ml-2 rounded-md shadow-sm bg-rose-600 text-white font-bold">Delete</button>
        </div>
          
            </li>
      
    )
}
export default TaskItem;