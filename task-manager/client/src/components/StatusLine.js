import Task from "./Task";

export default function StatusLine(props) {
  const { status, tasks } = props;

  let taskList;

  let tasksForStatus = []

  for (let i in tasks) {
    if (tasks[i].status === status) {
      tasksForStatus.push(tasks[i])
    }

  }

  if (tasksForStatus) {
    taskList = tasksForStatus.map((task) => {
      return (
        <Task
          key={task._id}
          task={task}
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