import { useState, useEffect } from "react";
// import "../styles/App.scss";
// import "../styles/task.scss";
import StatusLine from "./StatusLine";
import Popup from "./Popup";
import 'bootstrap/dist/css/bootstrap.min.css';


const API_BASE = "http://localhost:5000"

// https://stackoverflow.com/questions/57373072/state-is-not-defined
function App() {

  const [tasks, setTasks] = useState([]);
  const [popped, isPopped] = useState(false);


  useEffect(() => {
    getTasks();
    console.log("Loaded tasks");
  }, []);

  const getTasks = () => {
    fetch(API_BASE + "/tasks")
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Error: " + err));
  }

  const updateTask = async (id,updatedTask) => {

    const data = await fetch(API_BASE + "/tasks/update/" + id, {
			method: "POST",
			headers: {
				"Content-Type": "application/json" 
			},
			body: JSON.stringify(updatedTask)

		}).then(res => res.json())
    .catch(err=> console.log(err));

		setTasks([...tasks, data]);

    

  }

  const addTask = async (newTasktoAdd) => {

    const data = await fetch(API_BASE + "/tasks/new", {
			method: "POST",
			headers: {
				"Content-Type": "application/json" 
			},
			body: JSON.stringify(newTasktoAdd)

		}).then(res => res.json())
    .catch(err=> console.log(err));

		setTasks([...tasks, data]);

    console.log("added");

  }

  const deleteTask = async id => {

    const data = await fetch(API_BASE + '/tasks/delete/' + id, 
    { method: 'DELETE' }).then(res => res.json());

    setTasks(tasks => tasks.filter(task => task._id !== data.result._id));

  } 
  
  return (
    <div className="App">
      <h1>Task Manager by Jian Lin</h1>
      <h4>Your tasks</h4>
      <div className="btn btn-4 mb-4" onClick={() => isPopped(true)}>Add Task</div>
      <div className="container-fluid task-box">

        <div className="row">
          <div className="col-sm-4">
            <StatusLine
              tasks={tasks}
              addTask={addTask}
              deleteTask={deleteTask}
              updateTask={updateTask}
              status="Backlog"
            />
          </div>
          <div className="col-sm-4">
          <StatusLine
            tasks={tasks}
            addTask={addTask}
            deleteTask={deleteTask}
            updateTask={updateTask}
            status="In Progress"
          />
          </div>
          <div className="col-sm-4">
          <StatusLine
            tasks={tasks}
            addTask={addTask}
            deleteTask={deleteTask}
            updateTask={updateTask}
            status="Completed"
          />
          </div>


        </div>
        
        <br></br>
        { popped ? (<div><Popup popped={popped} isPopped={isPopped} updateTask={updateTask} addTask={addTask} poppedstatus={true}/></div>): ''}
        </div>
    </div>
    
  );
}

export default App;