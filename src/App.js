import './App.css';
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            taskId: null,
            taskType: null,
            taskTitle: null
        };
    }
    
  render() {
    return (
        <div>
            <div>
                <input type="radio" id="radioFeature" name="type" value="feature" checked/>
                <label htmlFor="radioFeature">Feature</label>

                <input type="radio" id="radioBugfix" name="type" value="bugfix"/>
                <label htmlFor="radioFeature">Bugfix</label>
            </div>
 
            <div>
                <input placeholder="Type" value={this.state.taskType} />
                <input placeholder="Task ID" value={this.state.taskId}/>
                <input placeholder="Task title" value={this.state.taskTitle}/>
            </div>          
        </div>
    )
  }
}


export default App;
