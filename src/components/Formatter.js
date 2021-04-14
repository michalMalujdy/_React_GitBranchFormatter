import React from "react";
import { Form, Input, Button, Radio, Card } from 'antd';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 8,
    },
};

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
            <div>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                >
                    <Form.Item label="Task type" name="layout">
                        <Radio.Group value={layout}>
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

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" onClick={this.onFormatClick}>
                            Format
                        </Button>
                    </Form.Item>
                    <Card type="inner" title="Branch name" extra={<a href="#">Copy</a>}>
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

        console.log(result);
        this.setState({formattingResult: result});
    }
}

export default Formatter;