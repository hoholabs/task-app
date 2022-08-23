import './App.css';
import React, {Component} from 'react'
import Overview from './Components/Overview'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskArray:[],
      task:{key:'',text:''}
    };
    this.submitNewTask = this.submitNewTask.bind(this);
    this.inputChange = this.inputChange.bind(this);

  }

  inputChange = (e) => {
    this.setState({
      task: {
        text:e.target.value,
        key:new Date().getTime(), 
      },
    })
  }

  submitNewTask = (e) => {
    e.preventDefault();

    this.setState(prevState => ({
      taskArray: [...prevState.taskArray, this.state.task],
      task:{
        text:'',
        key:'',
      }
      
    }));

    let taskInput = document.getElementById('task-input')
    taskInput.value = '';

  }

  render () { 
    return (
      <div className="App">

        <form className = "UserInput">
          <input id = 'task-input' onChange={this.inputChange} placeholder = 'New task'></input>
          <button type= 'submit' onClick={this.submitNewTask}>Add Task</button>
        </form>

        <Overview taskArray = {this.state.taskArray}/>

      </div>
    );
  }
}

export default App;
