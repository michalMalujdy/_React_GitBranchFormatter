import React from "react";
import { Form, Input, Button, Radio, Card, message } from 'antd';
import "./Formatter.scss";

class Formatter extends React.Component {
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
            <div className="formatter">

                <Form
                    className="formatter_form"
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item label="Task type" >
                        <Radio.Group defaultValue="feature" >
                            <Radio.Button value="feature" onChange={this.onTaskTypeChange}>Feature</Radio.Button>
                            <Radio.Button value="bugfix" onChange={this.onTaskTypeChange}>Bug</Radio.Button>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label="Task ID" name="taskId" >
                        <Input value={this.state.taskId} onChange={this.onTaskIdChange}/>
                    </Form.Item>

                    <Form.Item label="Task title" name="taskTitle">
                        <Input value={this.state.taskTitle} onChange={this.onTaskTitleChange}/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" onClick={this.onFormatClick}>
                            Format
                        </Button>
                    </Form.Item>
                    <Card title="Branch name" extra={<a href="#" onClick={this.onCopyClick}>Copy</a>}>
                        {this.state.formattingResult}
                    </Card>
                </Form>                
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
        const formattedTaskTitle = this.state.taskTitle
            .toLowerCase()
            .replaceAll(" ", "-")
            .replaceAll("\"", "")
            .replaceAll("'", "");

        let result = `${this.state.taskType}/${this.state.taskId}_${formattedTaskTitle}`;
        this.setState({formattingResult: result});
    }
    
    onCopyClick = (event) => {
        event.preventDefault();
        
        navigator.clipboard.writeText(this.state.formattingResult)
            .then(() => message.success("Branch name copied to the clipboard"))
            .catch(() => message.error("There was an error while copying"));
    }
}

export default Formatter;