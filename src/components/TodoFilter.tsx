
interface TodoFilterProps {
  filter: "all" | "active" | "completed";
  onFilterChange: (filter: "all" | "active" | "completed") => void;
}

const TodoFilter = ({ filter, onFilterChange }: TodoFilterProps) => {
  return (
    <div className="flex justify-center space-x-2 mb-8">
      {["all", "active", "completed"].map((f) => (
        <button
          key={f}
          onClick={() => onFilterChange(f as "all" | "active" | "completed")}
          className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
            filter === f
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/20"
              : "bg-white/50 backdrop-blur-sm text-gray-600 hover:bg-white/80"
          }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
