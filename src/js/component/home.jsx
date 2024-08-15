import React, { useState } from 'react';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Función para agregar una nueva tarea cuando el usuario presiona "Enter"
  const addTask = (e) => {
    if (e.key === 'Enter' && newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask(''); // Limpiar el input después de agregar la tarea
    }
  };

  // Función para eliminar una tarea
  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
	
    <div className="container d-flex justify-content-center">
     	<div className="card w-50 mt-5">
        <div className="card-body">
          <h1 className="text-center text-muted mb-4">todos</h1>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="What needs to be done?"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={addTask} // Agregar tarea al presionar Enter
          />
          <ul className="list-group">
            {tasks.length === 0 ? (
              <li className="list-group-item text-center text-muted">
                No tasks, add tasks
              </li>
            ) : (
              tasks.map((task, index) => (
                <li
                  key={index}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  {task}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTask(index)}
                  >
                    Delete
                  </button>
                </li>
              ))
            )}
          </ul>
          <div className="mt-3 text-muted">
            {tasks.length} item{tasks.length !== 1 ? 's' : ''} left
          </div>
        </div>
      </div>
    </div>
	
  );
};

export default Home;