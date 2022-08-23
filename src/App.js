import './App.css';
import React, {Component} from 'react'
import Overview from './Components/Overview'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskArray:[],
    };
    this.submitNewTask = this.submitNewTask.bind(this);
  }

  submitNewTask() {
    let taskInput = document.getElementById('task-input');

    this.setState(prevState => ({
      taskArray: [...prevState.taskArray, {key:new Date().getTime(), taskTitle:taskInput.value }]
    }));
  }

  render () { 
    return (
      <div className="App">

        <div className = "UserInput">
          <input id = 'task-input' placeholder = 'New task'></input>
          <button onClick={this.submitNewTask}>Add Task</button>
        </div>

        <Overview taskArray = {this.state.taskArray}/>

      </div>
    );
  }
}

export default App;
