import React from 'react';

import {FiTrash2} from "react-icons/fi"


function VisibilityTasks({ setShowDoneTasks, deleteTasksDone }) {
    return <>


        <div className=" visibilityBar">
            <div className="form-check form-switch showTasksSwitch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={e => setShowDoneTasks(e.target.checked)} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Show Tasks Done</label>
            </div>
            <div className = "clearButtonTasks">
                <button className=" buttonClear" onClick = {deleteTasksDone}>
                    <FiTrash2 className="iconTrash"/>
                </button>
            </div>
        </div>
    </>
}

export default VisibilityTasks;