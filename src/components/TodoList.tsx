
import TodoItem from "./TodoItem";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        <p>No tasks yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 animate-fade-in">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
