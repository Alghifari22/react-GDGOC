import { useEffect, useRef, useState } from "react";
import { FiCheck, FiEdit2, FiTrash2, FiRotateCcw } from "react-icons/fi";

function Todo() {
  const [list, setList] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [text, setText] = useState("");
  const [editID, setEditID] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

  const totalTodo = list.length;
  const completedTodo = list.filter((item) => item.completed).length;
  const progress =
    totalTodo === 0 ? 0 : Math.round((completedTodo / totalTodo) * 100);

  function addTodo() {
    if (!text.trim()) return;

    if (editID !== null) {
      setList(
        list.map((item) =>
          item.id === editID ? { ...item, description: text } : item,
        ),
      );
      setEditID(null);
    } else {
      setList([
        ...list,
        {
          id: Date.now(),
          description: text,
          completed: false,
        },
      ]);
    }

    setText("");
    inputRef.current.focus();
  }

  function deleteTodo(id) {
    setList(list.filter((item) => item.id !== id));
  }

  function editData(item) {
    setText(item.description);
    setEditID(item.id);
    inputRef.current.focus();
  }

  function toggleComplete(id) {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }

  return (
    <div className="min-h-screen flex justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          My Tasks
        </h2>

        {/* Input */}
        <div className="flex gap-2 mb-6">
          <input
            ref={inputRef}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            placeholder="Tulis tugas baru..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTodo}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-lg transition"
          >
            {editID !== null ? "Update" : "Add"}
          </button>
        </div>

        {/* List */}
        <ul className="space-y-3">
          {list.length === 0 && (
            <p className="text-gray-500 text-center text-sm">
              Belum ada tugas.
            </p>
          )}

          {list.map((item) => (
            <li
              key={item.id}
              className={`flex justify-between items-center p-3 rounded-lg border transition ${
                item.completed
                  ? "bg-green-50 border-green-200"
                  : "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
              }`}
            >
              <span
                className={`flex-1 ${
                  item.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                {item.description}
              </span>

              <div className="flex gap-2">
                <button
                  onClick={() => toggleComplete(item.id)}
                  className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-md"
                >
                  {item.completed ? <FiRotateCcw /> : <FiCheck />}
                </button>

                <button
                  onClick={() => editData(item)}
                  className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md"
                >
                  <FiEdit2 />
                </button>

                <button
                  onClick={() => deleteTodo(item.id)}
                  className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-md"
                >
                  <FiTrash2 />
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Progress */}
        {totalTodo > 0 && (
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-1 text-gray-600 dark:text-gray-300">
              <span>
                Selesai {completedTodo} / {totalTodo}
              </span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Todo;
