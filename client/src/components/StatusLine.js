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
        <div className="col-6">
          <Task
            key={task._id}
            task={task}
          />
        </div>
      );
    });
  }

  return (
    <div className="">
      <div className="">   
          <h3 className="text-center text-nowrap">{status}</h3>
      </div> 
      <div className="row">
          {taskList}
      </div>  

    </div>

  );
}