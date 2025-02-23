
import { useState } from "react";
import { Plus } from "lucide-react";

interface TodoInputProps {
  onAdd: (text: string) => void;
}

const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mb-8">
      <div className="relative flex items-center">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400/30 transition-all duration-300 pr-12 shadow-inner"
        />
        <button
          type="submit"
          className="absolute right-2 p-2 rounded-lg hover:bg-white/80 transition-all duration-300 disabled:opacity-50"
          disabled={!text.trim()}
        >
          <Plus className="w-5 h-5 text-blue-600" />
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
