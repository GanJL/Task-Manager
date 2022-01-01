import Task from "./Task";

export default function StatusLine(props) {
  const { status, tasks, addTask, deleteTask, updateTask} = props;

  let taskList, tasksForStatus;

  if (tasks) {
    console.log(tasks);
    tasksForStatus = tasks.filter((task) => {
      return task.status === status;
    });
  }

  if (tasksForStatus) {
    taskList = tasksForStatus.map((task) => {
      return (
        <Task
          addTask={(task) => addTask(task)}
          deleteTask={(id) => deleteTask(id)}
          key={task._id}
          task={task}
          updateTask={(id,task) => updateTask(id,task)}
        />
      );
    });
  }

  return (
    <div className="row">
      <div className="">   
          <h3 className="text-center text-nowrap">{status}</h3>
      </div> 
      <div className="">
          {taskList}
      </div>  

    </div>
  );
}