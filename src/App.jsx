import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      iscompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function onTaskClick(Taskid) {
    const NewTasks = tasks.map((task) => {
      if (task.id === Taskid) {
        return { ...task, iscompleted: !task.iscompleted };
      }
      return task;
    });
    setTasks(NewTasks);
  }

  function onDeleteTask(Taskid) {
    const NewTasks = tasks.filter((task) => task.id !== Taskid);
    setTasks(NewTasks);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
