import React, { useState } from 'react';

function TaskCreator({saveNewTask}) {

    const [newTask, setNewTask] = useState("");

    //Just save the task in the array located in App.js
    function eventSubmit(e){
        e.preventDefault();
        saveNewTask(newTask)
        setNewTask("");
    }

    return <>
        <div className="title">
            <span>Task To Do App</span>
        </div>
        <br />
        <form onSubmit={eventSubmit}>
            <div className="inputTasks">

                <input type="text" name="task" id="task" placeholder="Write a Task" value = {newTask} onChange={(e) => setNewTask(e.target.value)}></input>
                <input type="submit" name="send" id="send" value="Send"></input>

            </div>
        </form>




    </>
}

export default TaskCreator;  
