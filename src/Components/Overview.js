import React, {Component} from 'react'

class Overview extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    
    render(){

        const {taskArray} = this.props;

        return(
            <ul>
                {taskArray.map((task) =>{
                    return <li key = {task.key}>{task.taskTitle}</li>
                })}
            </ul>
        )
    }
}

export default Overview;