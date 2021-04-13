import './App.css';
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            taskId: "",
            taskType: "feature",
            taskTitle: "",
            formattingResult: ""
        };
    }
    
  render() {
    return (
        <div>
            <div>
                <input type="radio" name="type" id="radioFeature" value="feature" onChange={this.onTaskTypeChange}/>
                <label htmlFor="radioFeature">Feature</label>

                <input type="radio" name="type" id="radioBugfix" value="bugfix" onChange={this.onTaskTypeChange}/>
                <label htmlFor="radioBugfix">Bugfix</label>
            </div>
 
            <div>
                <input placeholder="Task ID" value={this.state.taskId} onChange={this.onTaskIdChange} />
                <input placeholder="Task title" value={this.state.taskTitle} onChange={this.onTaskTitleChange} />
            </div>      
            
            <button onClick={this.onFormatClick}>Format</button>
            <div>
                <h3>Output</h3>
                <p>{this.state.formattingResult}</p>
            </div>
        </div>
    )
  }
  
    onTaskTypeChange = (event) => {
        this.setState({taskType: event.target.value});
    }

    onTaskIdChange = (event) => {
        this.setState({taskId: event.target.value});
    }

    onTaskTitleChange = (event) => {
        this.setState({taskTitle: event.target.value});
    }
    
    onFormatClick = () => {
        this.format();
    }
    
    format = () => {
        const formattedTaskTitle = this.state.taskTitle.toLowerCase().replaceAll(" ", "-");
        let result = `${this.state.taskType}/${this.state.taskId}_${formattedTaskTitle}`;
        
        this.setState({formattingResult: result});
    }
}

export default App;
