
export default function taskReducer(task,action){
    const {type,payload} = action;
    switch(type){
        case 'ADDED':{
            return [
                ...task,
                payload
            ]
                
            
        }
        case "UPDATED":{
            return task.map(task =>{
                if(task.id === payload.id){
                    return payload
                }else{
                    return task
                }
            })
    
        }
        case "deleted":{
            return task.filter(t => t.id !== payload)
        }
    
    default:
        break;
    }
   
 
}