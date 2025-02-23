
import { Check, X } from "lucide-react";

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem = ({ id, text, completed, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className="animate-slide-in group flex items-center justify-between p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-center space-x-3">
        <button
          onClick={() => onToggle(id)}
          className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
            completed
              ? "bg-gradient-to-r from-blue-600 to-purple-600 border-transparent"
              : "border-gray-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20"
          }`}
        >
          {completed && <Check className="w-4 h-4 text-white" />}
        </button>
        <span
          className={`text-sm font-medium transition-all duration-300 ${
            completed
              ? "text-gray-400 line-through"
              : "text-gray-700 group-hover:text-gray-900"
          }`}
        >
          {text}
        </span>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="opacity-0 group-hover:opacity-100 p-2 rounded-lg hover:bg-red-50 transition-all duration-300"
      >
        <X className="w-4 h-4 text-gray-400 hover:text-red-500" />
      </button>
    </div>
  );
};

export default TodoItem;
