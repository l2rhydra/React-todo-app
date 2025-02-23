
import { useState } from "react";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import TodoFilter from "@/components/TodoFilter";
import { toast } from "sonner";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const Index = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTodo = (text: string) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
    toast.success("Task added successfully");
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    toast.success("Task deleted successfully");
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-50/80 to-purple-50/80 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tasks
          </h1>
          <p className="text-gray-600 text-lg">Organize your day with style</p>
        </div>
        
        <div className="glass-card rounded-2xl p-6 shadow-2xl">
          <TodoInput onAdd={addTodo} />
          <TodoFilter filter={filter} onFilterChange={setFilter} />
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
