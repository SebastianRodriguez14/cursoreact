import React from 'react';
// import {FiTrash, FiCheck} from "react-icons/fi"

function TaskList({ title, doneValue = false, tasks, toggleTask }) {

    function taskListRows() {
        return <>
            {
                tasks !== [] 
                ? tasks
                .filter(t => t.done === doneValue)
                .map(task =>
                    <tr key={task.name}>
                        <td>
                            {task.name}
                        </td>
                        <td>
                            <input type="checkbox" checked={task.done} onChange={() => toggleTask(task)} />
                        </td>
                    </tr>
                ) 
                : <tr>
                    <td colSpan={2}>Empty Task List</td>
                </tr>
            }
        </>
    }


    return <>
        <table className='tableTasks'>
            <thead className='tableTasksTitle'>
                <tr >
                    <th colSpan="2">{title}</th>
                </tr>

            </thead>
            <tbody className='tableTasksBody'>
                {taskListRows()}
            </tbody>
        </table>
    </>
}

export default TaskList;