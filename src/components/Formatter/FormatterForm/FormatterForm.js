import React from "react";
import "./FormatterForm.scss"
import {Form, Input, Button, Radio} from 'antd';

class FormatterForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            taskId: "",
            taskTitle: "",
            taskType: "feature"
        };
    }
    
    render() {
        return (
            <Form className="formatter-form" name="basic" initialValues={{remember: true}} >
                <Form.Item label="Task ID" name="taskId" >
                    <Input value={this.state.taskId} onChange={this.onTaskIdChange}/>
                </Form.Item>

                <Form.Item label="Task title" name="taskTitle">
                    <Input value={this.state.taskTitle} onChange={this.onTaskTitleChange}/>
                </Form.Item>

                <Form.Item label="Task type" >
                    <Radio.Group defaultValue="feature" >
                        <Radio.Button value="feature" onChange={this.onTaskTypeChange}>Feature</Radio.Button>
                        <Radio.Button value="bugfix" onChange={this.onTaskTypeChange}>Bug</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={this.onFormatClick}>
                        Format
                    </Button>
                </Form.Item>
            </Form>
        );
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
        this.props.onSubmit({...this.state});
    }
}

export default FormatterForm;