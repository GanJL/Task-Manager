import Task from "./Task";

export default function StatusLine(props) {
  const { status, tasks } = props;

  let taskList, tasksForStatus;

  console.log(tasks);
  if (tasks) {
    console.log(tasks);
    tasksForStatus = tasks.filter((task) => {
      return task.status === status;
    });
  }

  // if (tasksForStatus) {
  //   taskList = tasksForStatus.map((task) => {
  //     console.log(task);
  //     console.log("hereeeeeee");
  //     return (
  //       <Task
  //         key={task._id}
  //         task={task}
  //       />
  //     );
  //   });
  // }

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