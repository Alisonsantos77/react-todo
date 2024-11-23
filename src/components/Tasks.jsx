import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTask }) {
  const navigate = useNavigate()

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams({
      title: task.title,
      description: task.description,
    });
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            className={`bg-slate-400 w-full text-white p-2 rounded-md ${
              task.iscompleted ? "line-through" : "no-underline"
            }
            }`}
            onClick={() => onTaskClick(task.id)}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white"
          onClick={()=> onSeeDetailsClick(task)}
          >
            <ChevronRightIcon />
          </button>
          <button
            className="bg-slate-400 p-2 rounded-md text-white"
            onClick={() => onDeleteTask(task.id)}
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
