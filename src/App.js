import { useEffect, useState } from "react";
import TaskCreator from "./Components/TaskCreator";
import TaskList from "./Components/TaskList";
import VisibilityTasks from "./Components/VisibilityTasks";




function App() {


  const [tasks, setTasks] = useState([]);


  const [showDoneTasks, setShowDoneTasks] = useState(false);

  function saveNewTask(taskName) {

    if (!tasks.find(task => task.name === taskName)) {
      // Update the array tasks with the new task
      setTasks([...tasks, { name: taskName, done: false }])
    } else{
      alert("This task exists in the list")
    }
  } 

  function toggleTask(task) {
    // We create a new array with the changed of state and save in the variable of state tasks

    setTasks(tasks.map(t => t.name === task.name ? {...t, done: !t.done } : t))
    
  }

  function deleteTasksDone(){
    setTasks(tasks.filter(t => t.done === false));
  }

  useEffect(() => {
    /**
     * The second parameter of useEffect function receive a object that, when changed, 
     * execute the body of function
     * When we put an empty array, the body of function executed when rendering the app.
    */
    // We will fetch the tasks to local storage and set them in the tasks array


    setTasks(JSON.parse(localStorage.getItem("tasks")));


  }, [])

  useEffect(() => {

    /**
     * When the array tasks changed, we will push these changes to local storage
     */
    // Save the array tasks in the local storage
    /**
     * The Local Storage.
     * This helps us for data persistence of our app while session is open.
     * The data is kept while don't close us the browser.
     * This saves the data in a key:value format where the value can only be a String
     * That's why we will transform the array tasks to String using JSON.stringify
     */

    localStorage.setItem("tasks", JSON.stringify(tasks));

  }, [tasks])



  return (
    <div className="app">
      <TaskCreator saveNewTask={saveNewTask}/>
      <br />
      <TaskList title = {"To Do"} tasks={tasks} toggleTask = {toggleTask} />
      <br/>
      <VisibilityTasks setShowDoneTasks = {setShowDoneTasks} deleteTasksDone = {deleteTasksDone}/>

      <br/>

      {
        showDoneTasks &&
        <TaskList title = {"Done"} doneValue = {true} tasks={tasks} toggleTask = {toggleTask} />

      }
    </div>

  );
}

export default App;
