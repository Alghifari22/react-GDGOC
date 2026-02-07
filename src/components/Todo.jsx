import { useState } from "react";
import { FiCheck, FiEdit2, FiTrash2, FiRotateCcw } from "react-icons/fi";

function Todo() {
  const [list, setList] = useState([
    {
      id: 1,
      description: "hallo",
      completed: false,
    },
  ]);
  const [text, setText] = useState("");
  const [editID, setEditID] = useState("");

  const totalTodo = list.length;
  const completedTodo = list.filter((item) => item.completed).length;

  function addTodo() {
    if (text.trim() === "") return;

    if (editID !== null) {
      // Edit Mode
      setList(
        list.map((item) =>
          item.id === editID ? { ...item, description: text } : item,
        ),
      );
      setEditID(null);
    } else {
      // Add Mode
      setList([
        ...list,
        {
          id: list.length + 1,
          description: text,
          completed: false,
        },
      ]);
    }

    setText("");
  }

  function deleteTodo(id) {
    setList(list.filter((item) => item.id !== id));
  }

  function editData(item) {
    setText(item.description);
    setEditID(item.id);
  }

  function toggleComplete(id) {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }

  return (
    <div className="card todo-section">
      <h3>My Tasks</h3>

      <div className="input-group">
        <input
          type="text"
          id="todo-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tulis tugas baru..."
        />
        <button onClick={addTodo} className="btn btn-primary">
          {editID ? "Update" : "Add"}
        </button>
      </div>

      <ul id="todo-list" className="todo-list">
        {list.map((item) => (
          <li key={item.id} className={item.completed ? "todo-done" : ""}>
            <span>{item.description}</span>

            <div className="btn-group">
              <button
                className="icon-btn done"
                onClick={() => toggleComplete(item.id)}
                title={item.completed ? "Batalkan selesai" : "Tandai selesai"}
              >
                {item.completed ? <FiRotateCcw /> : <FiCheck />}
              </button>

              <button
                className="icon-btn edit"
                onClick={() => editData(item)}
                title="Edit"
              >
                <FiEdit2 />
              </button>

              <button
                className="icon-btn delete"
                onClick={() => deleteTodo(item.id)}
                title="Hapus"
              >
                <FiTrash2 />
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="todo-progress">
        Todolist selesai {completedTodo} / {totalTodo}
      </div>
    </div>
  );
}

export default Todo;
