function TaskHeader(){
    return (
        <div className="flex justify-between items-center col-span-8">
              <h2 className="text-2xl font-semibold">task list</h2>
            <button className="px-3 py-2 rounded-md shadow-sm bg-green-600 text-white font-bold text-xl">clear task</button>
        </div>
    )
}
export default TaskHeader;