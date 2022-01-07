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

  // const handleTaskList = (taskList,status) => {
  //   let filteredTask = Object.values(taskList).filter((task) => task.status === status)
  //   if (filteredTask){
  //     return filteredTask
  //   }

  // }

  // const taskList = handleTaskList(tasks,status)
  // console.log(taskList);


  // console.log(tasks.map((a)=>console.log(a)));

  // if (tasks) {
  //   tasksForStatus = tasks.filter((task) => {
  //     return task.status === status;
  //   });
  // }

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