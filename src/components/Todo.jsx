import { useState } from 'react'

function Todo() {
  const [list, setList] = useState([
    {
      id: 1,
      description: "hallo"
    }
  ]);
  const [text, setText] = useState("")
  const [editID, setEditID] = useState("")

  function addTodo(){
    if(text.trim() === "") return

    if(editID !== null){ // Edit Mode
      setList(list.map(item => 
        item.id === editID ? {...item, description: text} : item
      ))
      setEditID(null)
    }else{ // Add Mode
      setList([
        ...list,
        {
          id: list.length + 1,
          description: text
        }
      ])
    }

    setText("")
  }

  function deleteTodo(id){
    setList(list.filter(item => item.id !== id));
  }

  function editData(item){
    setText(item.description)
    setEditID(item.id)
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
          {list.map(item => (
            <li key={item.id}>
              <span>{item.description}</span>
              <div>
                <button
                  className='btn-edit' 
                  onClick={() => editData(item)}
                >
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => deleteTodo(item.id)}
                >
                  Hapus
                </button>
              </div>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Todo
