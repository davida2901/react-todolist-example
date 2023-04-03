import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-10 mb-4">
        <h1 className="text-2xl font-blod text-white mb-3">Crea tu tarea!</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          value={title}
          autoFocus
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>

        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Descripcion de tarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 rounded-md text-white">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
