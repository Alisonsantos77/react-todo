import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></Input>
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></Input>
      <Button
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            alert("Preencha todos os campos");
            return;
          }

          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </Button>
    </div>
  );
}

export default AddTask;
