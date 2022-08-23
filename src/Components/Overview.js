import React, {Component} from 'react'

class Overview extends Component{
    constructor(props){
        super(props);
        this.state={};

        this.deleteTask = this.deleteTask.bind(this);
    }
    
    deleteTask = (key) =>{
        console.log(key);
    }

    render(){

        const {taskArray} = this.props;

        return(
            <ul>
                {taskArray.map((task) =>{
                    return <li key = {task.key}>
                                {task.text}
                                <button onClick={()=>{this.deleteTask(task.key)}} >X</button>
                            </li>
                })}
            </ul>
        )
    }
}

export default Overview;