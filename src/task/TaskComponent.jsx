import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function TaskComponent() {
  return (
    <div className="max-w-4xl grid grid-cols-12 bg-gray-100 mx-auto p-4 my-6 gap-4">
      <TaskForm />

      <TaskList />
    </div>
  );
}
export default TaskComponent;
