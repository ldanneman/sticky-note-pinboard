import React from "react"


function ArrayOfNotes(props) {
    const { arrayOfTasks } = props;
    return (
        <div >
            {arrayOfTasks.map((task) => { 
                return console.log(task)
            })}
            <h1>H</h1>
        </div>
    )   
}



export default ArrayOfNotes