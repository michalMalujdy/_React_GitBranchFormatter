import React from "react";
import {Card, message} from 'antd';
import "./Formatter.scss";
import FormatterForm from "./FormatterForm/FormatterForm";
import BranchNameFormatter from "../../domain/branchNameFormatter";

class Formatter extends React.Component {
    branchNameFormatter = new BranchNameFormatter();
    
    constructor(props) {
        super(props);
        
        this.state = {
            formattingResult: ""
        };
    }

    render() {
        return (
            <div className="formatter">
                <div className="formatter_content">
                    <FormatterForm onSubmit={this.onFormSubmit}/>
                    
                    <Card title="Branch name" extra={this.renderCopyToClipboard()}>
                        {this.state.formattingResult}
                    </Card>
                </div>     
            </div>
        )
    }

    renderCopyToClipboard = () => {
        return <a href="#" onClick={this.onCopyClick}>Copy</a>;
    }
    
    onFormSubmit = (form) => {
        const formattedBranchName = this.branchNameFormatter.getFormattedBranchName(
            form.taskId,
            form.taskTitle,
            form.taskType
        );

        this.setState({formattingResult: formattedBranchName});
    }
    
    onCopyClick = (event) => {
        event.preventDefault();
        
        navigator.clipboard.writeText(this.state.formattingResult)
            .then(() => message.success("Branch name copied to the clipboard"))
            .catch(() => message.error("There was an error while copying"));
    }
}

export default Formatter;